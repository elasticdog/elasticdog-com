---
tags: sapling
---

_Our goal is to create a secure Android-based phone that maintains as much personal privacy as possible while still providing a straightforward, reliable everyday experience._

This guide does not provide specific app recommendations or deep settings walkthroughs, since those are individual workflow choices and can change frequently; instead, it focuses on the order of operations and the privacy-critical decisions that are easy to overlook during initial setup.

To reduce complexity and avoid frustration, we'll stick to using only the **Owner** profile and won't introduce secondary user profiles. We will also configure the sandboxed Google Play Store to enable secure access to mainstream apps and push notifications while retaining GrapheneOS's strong isolation model. This mirrors upstream recommendations and offers a balanced mix of security and usability.

Once you're comfortable with the platform, you can explore more advanced setups using Private Space, isolated profiles, and selective app sharing.

## Prerequisites

- You'll need a laptop with a Chromium-based browser installed (Gecko-based browsers like Firefox won't work, as they do not support WebUSB). I recommend [Brave](https://brave.com/). Have your password manager ready for storing new credentials.
- Consider how you want to handle payments associated with your device or apps. Some privacy-preserving options include:
  - Paying with **cash** when purchasing hardware (where practical).
  - Using retail **gift cards** for app store credit or subscription top-ups. Always keep the receipt until the gift card has been successfully redeemed.
  - Using a **virtual credit card** provider like <https://www.privacy.com/> with single-use or merchant-locked cards.

  These approaches reduce the personal information exposed during transactions while still working within standard payment workflows.

- For email compartmentalization, you'll want the ability to generate random email addresses that forward to your primary email address. Something like
  [Fastmail's masked email](https://www.fastmail.com/features/masked-email/) or [SimpleLogin](https://simplelogin.io/). Avoid using a domain you personally own, because it can still be tied to you through registration records.
- Obtain a new [supported Pixel device](https://grapheneos.org/faq#supported-devices) that is factory-unlocked (not carrier-locked). Avoid purchasing a used phone to ensure a clean history and supply-chain integrity.

## Install GrapheneOS

- Bring the unopened phone and your laptop to a location with public Wi-Fi (e.g., a coffee shop). This reduces any direct association between your home network and the new device.
- Unbox and power on the phone. Skip all onboarding steps except connecting to the public Wi-Fi. **Do not** sign in to any Google account. Run all System Updates and reboot as needed (this could take a while). Repeat until no further updates are shown in the stock operating system.
- Connect your laptop to the public Wi-Fi and follow the upstream [GrapheneOS web-based installation guide](https://grapheneos.org/install/web) using a Chromium-based browser and the USB-C cable supplied with the phone.
- Once GrapheneOS boots for the first time, complete the onboarding steps.
- Check again for any additional System Updates in GrapheneOS and apply them.
- Open the built-in _App Store_ application and update all preinstalled apps.

## Perform Hardware Verification

Verifying the device early ensures you're building on trusted hardware with no signs of tampering.

- On your laptop, create an account at <https://attestation.app/> and store the credentials in your password manager.
- After logging in, configure email alerts to receive notifications for any hardware integrity issues (remember to use a masked/alias email address).
- On the phone, open the _Auditor_ app and pair it with your attestation.app account by following the [scheduled remote verification instructions](https://attestation.app/tutorial#scheduled-remote-verification). The app will periodically perform hardware integrity checks and report results to your attestation dashboard.

## Route All Traffic Through a VPN

Establishing a privacy-respecting network path (using a Virtual Private Network) before adding accounts or apps helps reduce the amount of identifying metadata exposed during setup. These steps use [Mullvad VPN](https://mullvad.net/) as an example, but other reputable VPN providers (such as [Proton VPN](https://protonvpn.com/)) would follow a similar installation and configuration process.

- In the _App Store_, install _Accrescent_, a security-focused third-party app store.
- Open _Accrescent_ and install _AppVerifier_, which allows you to verify APK signing keys for manually downloaded applications.
- Open the _Vanadium_ web browser and visit: <https://mullvad.net/en/download/vpn/android>
- Download the APK directly instead of using an app store.
- After downloading, open _AppVerifier_, verify the APK, and confirm a green "SUCCESS" message under _Internal Database Status_ (manual key verification is available but not required in this case).
- Once verified, install the APK via the _Files_ app.
- Open _Mullvad VPN_ and create a new account. Mullvad requires no personal information; your account number serves as your login. Store it in your password manager.
- Use your preferred privacy-preserving payment method to purchase a month of service.
- In the GrapheneOS VPN settings, enable **Always-on VPN** and **Block connections without VPN**.

Once Mullvad is active, you can safely connect to any network (cellular or Wi-Fi) because all traffic is forced through the encrypted tunnel. The _Mullvad VPN_ app will update itself automatically when new upstream releases become available.

## Set Up the Sandboxed Google Play Store

Adding the sandboxed Play Store after the VPN is active ensures your Google traffic blends into a shared network pool rather than standing out from the crowd.

- Install _Google Play Store_ from the _App Store_ application. It will automatically add the sandboxed _Google Play services_ dependency.
- Open the _Google Play Store_ application to begin the initial setup.
- Select **Create account**, then choose "Use my current email address instead" to avoid creating a Gmail address.
- Enter a unique masked/alias email address that forwards to your main inbox. Do not reuse an alias tied to other services.
- Provide only the minimum required information and skip optional personal details.
- Create a strong password and store it in your password manager.
- Enable TOTP-based multi-factor authentication and save your backup codes securely.
- Avoid adding a recovery phone number unless you explicitly want it associated with this account.

Use this Google account only inside the sandboxed Play Store environment.

### If a Phone Number Is Required

Google may require a phone number for the _initial_ account verification process. Avoid using any number already associated with another Google account, since that can create internal linkages and undermine compartmentalization.

- You can use **any active mobile number** you already have, including one you plan to later port to this device.
- If your main number is not yet active on the phone, using a standard **prepaid SIM** from your preferred carrier is also an option.
- You can remove the SIM after verification if you do not want that number tied to ongoing Google activity.

## Minimize Google Telemetry

Adjusting Google account privacy settings reduces optional data collection while keeping essential functionality intact.

- On your phone, open the _Vanadium_ web browser and visit: <https://myaccount.google.com/data-and-privacy>
- Pause the history settings for Web & App Activity, Timeline, and YouTube History.
- Turn off all personalized ads.
- Restrict personal profile visibility and disable unnecessary location sharing.
- Review and remove any unnecessary connected apps or services (this list is
  usually empty on a new account).
- Unsubscribe from Google service newsletters and product-tip emails.

## App Installation Precedence

Before installing an app, first consider whether the service works well in Vanadium. Web access runs inside Vanadium's hardened sandbox, exposes far less attack surface, and avoids granting apps long-term permissions. Whenever a website provides the functionality you need, it's the most private and secure option.

If you do need to install an app, use the following source hierarchy, ordered by trust level:

1. **App Store** (GrapheneOS)
   - Use for system apps and core security components.
   - These apps are built and signed by the project and receive updates fastest.

2. **Accrescent**
   - Use for security-audited third-party apps built from verified source code.
   - Currently offers a limited selection of apps, but the ecosystem is expanding.

3. **Google Play Store**
   - Use when applications require:
     - Google Play Services APIs
     - Firebase Cloud Messaging (FCM) push notifications
     - general commercial ecosystem support
   - Apps run inside GrapheneOS's compatibility layer and cannot gain privileged access.

4. **Obtainium**
   - Use only when the app is not available from higher-trust sources.
   - Use to automatically follow upstream project releases across GitHub, GitLab, and similar repos.
   - Verify APK signing keys via _AppVerifier_ when possible.

This guide intentionally excludes F-Droid and Aurora Store because their distribution models fall short of GrapheneOS's security expectations.

### Install Obtainium

- Open the _Vanadium_ web browser and visit: <https://obtainium.imranr.dev/>
- Download the **Universal APK**.
- After downloading, open _AppVerifier_, verify the APK, and confirm a green "SUCCESS" message under _Internal Database Status_ (manual key verification is available but not required in this case).
- Once verified, install the APK via the _Files_ app.

The Obtainium app will update itself automatically when new upstream releases become available.

## Explore GrapheneOS Features

GrapheneOS includes a wide range of privacy and security features that you can configure based on your threat model and desired workflow. The default settings are already secure, so you typically only need to adjust them when you have a specific use case.

See the official documentation for detailed explanations: <https://grapheneos.org/features>
