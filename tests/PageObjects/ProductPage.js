
class ProductPage
{
    constructor(page)
    {
        this.page=page;
        this.Productlist=page.locator('.inventory_list');
        this.addtoCartbtn=page.locator('//button[@name='add-to-cart-sauce-labs-bike-light']');
        this.cartbtn=page.locator('//a[@class='shopping_cart_link']');
    }
}
