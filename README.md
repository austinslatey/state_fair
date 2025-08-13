# state_fair
# Adding a Custom Popup to Your Shopify Store for 2025 State Fair Sale

This guide outlines how to create a popup that prompts users to sign in or create an account to access exclusive pricing (up to 25% off) for a 2025 State Fair Sale, redirects them to a deals page after login, and displays discounted prices only for logged-in users.

## Prerequisites
- A Shopify store with customer accounts enabled (Settings > Customer accounts > Enable accounts).
- A deals page created in Shopify (Online Store > Pages > Add page, e.g., "2025 State Fair Deals").
- Products tagged or organized in a collection for the State Fair Sale.
- Basic understanding of Shopify admin and theme customization.

## Step 1: Install a Popup App
Using a third-party popup app is the easiest way to create a custom popup without coding. Recommended apps include **Privy**, **Omnisend**, or **POWR Popup** due to their user-friendly interfaces and integration with Shopify’s customer accounts.

1. **Go to the Shopify App Store**:
   - In your Shopify admin, navigate to **Apps** > **Shopify App Store**.
   - Search for "popup" and choose an app like Privy, Omnisend, or POWR Popup.

2. **Install the App**:
   - Click **Add app**, review permissions, and click **Install app**.
   - Follow the app’s setup instructions to integrate it with your store.

3. **Why Use an App?**:
   - Apps like Privy and Omnisend offer drag-and-drop editors, customizable templates, and triggers (e.g., exit-intent, time delay) that suit your needs. They also integrate with Shopify’s customer accounts for seamless login redirects.[](https://www.omnisend.com/blog/shopify-popup/)[](https://www.privy.com/blog/how-to-add-a-popup-on-shopify)

## Step 2: Create the Popup
Configure the popup to display the message: "Sign in or create an account to get exclusive pricing up to 25% off for our 2025 State Fair Sale."

1. **Access the Popup Editor**:
   - Open the installed app’s dashboard (e.g., Privy > Create Campaign, Omnisend > Forms > Create form, POWR > Popup Dashboard).
   - Select a popup template (e.g., email signup or promotional popup).

2. **Customize the Popup Content**:
   - **Text**: Add the message: "Sign in or create an account to get exclusive pricing up to 25% off for our 2025 State Fair Sale."
   - **Call-to-Action (CTA)**: Add a button labeled "Sign In/Create Account."
   - **Design**: Customize fonts, colors, and images to match your store’s branding. For example, use festive imagery for the State Fair theme.
   - **Link the CTA**: Set the button to redirect to Shopify’s login page (typically `/account/login`). In most apps, you can set the CTA URL to `/account/login`.

3. **Set Display Rules**:
   - **Trigger**: Choose when the popup appears, e.g., on page load, after 5 seconds, or on exit-intent (when the user tries to leave).
   - **Targeting**: Display the popup only to non-logged-in users (most apps allow targeting based on visitor status).
   - **Pages**: Show the popup on all pages or specific pages (e.g., homepage, product pages).
   - **Frequency**: Limit how often the popup appears to avoid annoying visitors (e.g., once per session).

4. **Redirect After Login**:
   - Shopify’s default login page redirects users to the account dashboard (`/account`) after login. To redirect to your State Fair deals page (e.g., `/pages/state-fair-deals`), you’ll need to customize the login form or use an app that supports post-login redirects.
   - **Option 1: App-Based Redirect**:
     - Some apps like Privy allow you to set a redirect URL after form submission or login. Configure the redirect to your deals page URL (e.g., `/pages/state-fair-deals`).
   - **Option 2: Manual Code (Advanced)**:
     - If your app doesn’t support redirects, you can modify the login form to redirect after authentication. This requires coding (see Step 4).

5. **Preview and Publish**:
   - Preview the popup to ensure it looks good on desktop and mobile.
   - Save and publish the popup to make it live.

## Step 3: Set Up Exclusive Pricing for Logged-In Users
To show discounted prices (up to 25% off) only to logged-in users, you can use Shopify’s customer tags, metafields, or a third-party app to control pricing visibility.

### Option 1: Use Customer Tags and Price Overrides
1. **Tag Logged-In Customers**:
   - In Shopify admin, go to **Customers** and manually add a tag like `state-fair-member` to users who sign up or log in. Alternatively, use an app like **Shopify Flow** to automatically tag users upon login or account creation.
   - Example: Create a workflow in Shopify Flow to add the `state-fair-member` tag when a customer creates an account or logs in.

2. **Create a Discount**:
   - Go to **Discounts** > **Create discount** > **Amount off products**.
   - Set a discount (e.g., up to 25% off) for specific products or a collection (e.g., "State Fair Sale").
   - Apply the discount only to customers with the `state-fair-member` tag.
   - Ensure the discount is active during the 2025 State Fair Sale period.

3. **Display Discounted Prices**:
   - Shopify doesn’t natively show different prices based on login status without custom code or apps. Use an app like **Wholesale Club**, **Locksmith**, or **B2B/Wholesale Solution** to display exclusive pricing for tagged customers.
   - Example with Locksmith:
     - Install **Locksmith** from the Shopify App Store.
     - Create a "lock" for the State Fair Sale collection or products.
     - Allow access only to customers with the `state-fair-member` tag.
     - Set alternative pricing (e.g., 25% off) for locked products when viewed by tagged customers.

### Option 2: Use Metafields for Custom Pricing
1. **Define Metafields**:
   - Go to **Settings** > **Custom data** > **Products**.
   - Create a metafield definition (e.g., `state_fair_price`) to store the discounted price for logged-in users.
   - For each State Fair Sale product, add the discounted price in the metafield (e.g., regular price $100, state_fair_price $75).

2. **Edit Theme Code**:
   - Modify your theme to show the `state_fair_price` for logged-in users and the regular price for others.
   - Go to **Online Store** > **Themes** > **Actions** > **Edit code**.
   - Find the product price template (e.g., `price.liquid` or `product-template.liquid`).
   - Add Liquid logic to check if the user is logged in and display the appropriate price:

```liquid
{% if customer %}
  {% if product.metafields.custom.state_fair_price %}
    <span class="price">{{ product.metafields.custom.state_fair_price | money }}</span>
  {% else %}
    <span class="price">{{ product.price | money }}</span>
  {% endif %}
{% else %}
  <span class="price">{{ product.price | money }}</span>
{% endif %}
```

   - This code checks if a customer is logged in (`{% if customer %}`) and displays the `state_fair_price` metafield if available; otherwise, it shows the regular price.

3. **Test the Pricing**:
   - Log in as a test customer to verify that discounted prices appear on State Fair Sale products.
   - Log out to confirm that non-logged-in users see regular prices.

## Step 4: Redirect to Deals Page After Login (Optional Custom Code)
If your popup app doesn’t support post-login redirects, you can customize the login page to redirect to the State Fair deals page.

1. **Edit the Login Template**:
   - Go to **Online Store** > **Themes** > **Actions** > **Edit code**.
   - Find the login template (e.g., `customers/login.liquid` or `main-login.liquid`).
   - Add a hidden input field to the login form to specify the redirect URL:

```liquid
<form id="customer_login" action="/account/login" method="post">
  <input type="hidden" name="checkout_url" value="/pages/state-fair-deals">
  <!-- Existing login form fields (email, password, etc.) -->
</form>
```

2. **Add JavaScript for Redirect**:
   - In the same file or in a JavaScript file (e.g., `theme.js`), add code to handle the redirect after login. Shopify automatically redirects to the `checkout_url` value if provided.
   - Alternatively, use a third-party app like **Login Redirect** to manage redirects without coding.

3. **Test the Redirect**:
   - Test the login process to ensure users are redirected to `/pages/state-fair-deals` after signing in.

## Step 5: Create the State Fair Deals Page
1. **Create the Page**:
   - Go to **Online Store** > **Pages** > **Add page**.
   - Title it "2025 State Fair Deals" and add content (e.g., a list of discounted products or a collection embed).
   - Save and note the page URL (e.g., `/pages/state-fair-deals`).

2. **Link Products**:
   - Create a collection for State Fair Sale products (Products > Collections > Create collection).
   - Embed the collection on the deals page using Shopify’s page editor or a theme block.

## Step 6: Test and Optimize
1. **Test the Popup**:
   - Preview the popup on desktop and mobile to ensure it displays correctly.
   - Test the login/create account flow to confirm redirection to the deals page.
   - Verify that logged-in users see discounted prices and non-logged-in users see regular prices.

2. **Monitor Performance**:
   - Use the popup app’s analytics to track impressions, clicks, and conversions.
   - Use Shopify’s analytics to monitor sales from the State Fair deals page.

3. **Optimize**:
   - Adjust popup timing (e.g., delay or exit-intent) to improve engagement.
   - A/B test different popup designs or discount offers to maximize conversions.

## Best Practices
- **Timing**: Show the popup after 3–10 seconds or on exit-intent to avoid annoying visitors.[](https://instant.so/blog/how-to-add-custom-popup-in-shopify)
- **Mobile Responsiveness**: Ensure the popup is mobile-friendly, as many users shop on mobile devices.[](https://powercommerce.com/blogs/shopify-hub/how-to-add-custom-popup-in-shopify-a-step-by-step-guide)
- **Clear CTA**: Make the "Sign In/Create Account" button prominent and action-oriented.[](https://instant.so/blog/how-to-add-custom-popup-in-shopify)
- **Compliance**: Include a privacy policy link in the popup to comply with regulations like GDPR.[](https://bsscommerce.com/shopify/how-to-add-a-popup-to-shopify/)
- **Design Consistency**: Match the popup’s colors, fonts, and imagery to your store’s branding.[](https://bsscommerce.com/shopify/how-to-add-a-popup-to-shopify/)

## Recommended Apps
- **Privy**: Great for popups with login integration and analytics.[](https://www.privy.com/blog/how-to-add-a-popup-on-shopify)
- **Omnisend**: Offers advanced targeting and drag-and-drop popup creation.[](https://www.omnisend.com/blog/shopify-popup/)
- **Locksmith**: Ideal for locking prices and showing discounts only to logged-in users.[](https://www.youtube.com/watch?v=JrxC7K3BxFE)
- **Shopify Flow**: Automates customer tagging for discount eligibility.

## Notes
- If you prefer a no-code solution, stick to apps like Privy or Omnisend for the popup and Locksmith for pricing.
- For advanced customization (e.g., custom login redirects or pricing logic), consider hiring a Shopify developer or using Shopify Experts.
- Ensure your State Fair Sale collection is ready before launching the popup campaign.