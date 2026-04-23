

class Soucelogin{

    constructor (page)
    {
        this.page=page;
        this.UsernameInput=page.locator('//input[@name='user-name']');
        this.PasswordInput=page.locator('//input[@name='password']') ;

        this.Loginbtn=page.locator('//input[@type='submit']');


    }

    async gotu()
    {
        await this.page.goto('https://www.saucedemo.com/');


    }

    async login(username,password)
    {
        await this.UsernameInput.fill(username);
        await this.PasswordInput.fill(password);
        await this.Loginbtn.click();  
    
    }
}

module.exports={Soucelogin};



