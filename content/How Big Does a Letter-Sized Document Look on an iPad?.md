When viewing a U.S. letter-sized document (8.5" &times; 11") on an iPad, the entire page is scaled down to fit the **width** of the screen. Here's the math behind how much smaller it appears.

## Step 1: iPad Screen Dimensions

As an example, the 13" iPad Pro's display has a 2752-by-2064-pixel resolution at 264 ppi (pixels per inch), according to [Apple specs](https://support.apple.com/en-us/119891):

$$
\begin{aligned}
\text{Width} &= \frac{2064}{264} \approx 7.818~\text{inches} \\[1.2em]
\text{Height} &= \frac{2752}{264} \approx 10.424~\text{inches}
\end{aligned}
$$

> [!note]
>
> While the iPad's native resolution is 2752-by-2064 (landscape, 4:3), we want portrait orientation here, so the resolution is rotated and the aspect ratio becomes 3:4.

## Step 2: Scaling the Document to Fit the iPad

We're scaling the 8.5" width of the letter page to fit the 7.818" screen width:

$$
\text{Scale factor} = \frac{7.818}{8.5} \approx 0.920
$$

This means the height of the page is scaled proportionally:

$$
\text{Scaled height} = 11 \times 0.920 = 10.120~\text{inches}
$$

Which fits comfortably within the iPad's 10.424" screen height.

To express the scale factor as a **linear reduction**:

$$
\text{Linear reduction} = 1 - 0.920 = 0.080 = 8.0\%
$$

We can also estimate the **area reduction** using the square of the scale factor:

$$
\text{Area reduction} = 1 - (0.920)^2 \approx 1 - 0.846 = 0.154 = 15.4\%
$$

## Conclusion

So when you view a full 8.5" &times; 11" document on a 13" iPad Pro in portrait mode:

- It appears **about 8% smaller** in width and height than the real size.
- The total **visible area is reduced by roughly 15.4%** compared to holding the same page on paper.

### Current iPad Models

Here are the results for all iPad models that are currently for sale (as of 2025-04-16), with dimensions shown in portrait mode:

| iPad Model           | Display Size |  Resolution (px)  | PPI | Screen Dimensions      | Letter Page Scale |
| -------------------- |:----------: |:---------------: |:-: |:--------------------: | ----------------: |
| **iPad Pro 13-inch** |     13"      | 2752 &times; 2064 | 264 | 7.818" &times; 10.424" |             92.0% |
| **iPad Pro 11-inch** |    11.1"     | 2420 &times; 1668 | 264 |  6.318" &times; 9.167" |             74.3% |
| **iPad Air 13-inch** |    12.9"     | 2732 &times; 2048 | 264 | 7.758" &times; 10.348" |             91.3% |
| **iPad Air 11-inch** |    10.86"    | 2360 &times; 1640 | 264 |  6.212" &times; 8.939" |             73.1% |
| **iPad**             |    10.86"    | 2360 &times; 1640 | 264 |  6.212" &times; 8.939" |             73.1% |
| **iPad mini**        |     8.3"     | 2266 &times; 1448 | 326 |  4.442" &times; 6.951" |             52.3% |
