When viewing a U.S. letter-sized document (8.5" &times; 11") on a 13" iPad Pro in portrait mode, the entire page is scaled down to fit the **width** of the screen. Here's the math behind how much smaller it appears.

## Step 1: iPad Screen Diagonal Dimension

To get the physical display size (diagonal in inches), we'll use the formula:

$$
\text{diagonal} = \frac{\sqrt{\text{width}^2 + \text{height}^2}}{\text{ppi}}
$$

Where the 13" iPad Pro's display has a 2064-by-2752-pixel resolution at **264 pixels per inch (ppi)**, per [Apple specs](https://support.apple.com/en-us/119891):

$$
\begin{gather}
\sqrt{2064^2 + 2752^2} = \sqrt{4260096 + 7573504} = \sqrt{11833600} = 3440~\text{pixels} \\[1em]
\frac{3440}{264} \approx 13.03~\text{inches}
\end{gather}
$$

The physical display size is approximately **13.03 inches diagonal**.

## Step 2: iPad Screen Width and Height

First, we'll need the aspect ratio:

$$
\text{Aspect ratio} = \frac{\text{width}}{\text{height}} = \frac{2064}{2752} = \frac{3}{4}
$$

The iPad has a 3:4 aspect ratio.

> [!note]
>
> While the iPad's native resolution is 2752-by-2064 (landscape, 4:3), we're working in portrait orientation here, so the aspect ratio becomes 3:4.

We'll use the **Pythagorean theorem** to calculate the physical width and height from the diagonal and aspect ratio.

$$
\begin{aligned}
\sqrt{(3x)^2 + (4x)^2} &= 13.03 \\
\sqrt{9x^2 + 16x^2} &= 13.03 \\
\sqrt{25x^2} &= 13.03 \\
5x &= 13.03 \\
x &= \frac{13.03}{5} = 2.606
\end{aligned}
$$

Now calculate width and height:

$$
\begin{aligned}
\text{Width} &= 3x = 7.818~\text{inches} \\
\text{Height} &= 4x = 10.424~\text{inches}
\end{aligned}
$$

These dimensions can be easily confirmed using the screen resolution and pixel density directly:

$$
\begin{aligned}
\text{Width} &= \frac{2064}{264} \approx 7.818~\text{inches} \\[0.75em]
\text{Height} &= \frac{2752}{264} \approx 10.424~\text{inches}
\end{aligned}
$$

## Step 3: Scaling the Letter Page to Fit the iPad

We're scaling the 8.5" width of the letter page to fit the 7.818" screen width:

$$
\text{Scale factor} = \frac{7.818}{8.5} \approx 0.9198
$$

This means the height of the page is scaled proportionally:

$$
\text{Scaled height} = 11 \times 0.9198 = 10.118~\text{inches}
$$

Which fits comfortably within the iPad's 10.424" screen height.

We can also estimate the **area reduction** using the square of the linear scale factor:

$$
\text{Area reduction} = 1 - (0.9198)^2 = 1 - 0.846 \approx 0.154 = 15.4\%
$$

## Conclusion

- Linear scaling: **~8.0% smaller**
- Area reduction: **~15.5% smaller**

So when you view a full 8.5" &times; 11" page on a 13" iPad Pro in portrait mode, **everything appears about 8% smaller** linearly, and the **total visible area is reduced by roughly 15.5%** compared to a real paper page.
