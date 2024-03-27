describe('Blog', () => {
    
    it('Fill Input Fields, Submit Form and Assert Message', async () => {
        await browser.url("/blog")
        //Get Recent Post List Elements
        const recentPostList = await $$('recent-post-3 ul li')

        //Loop through th list and assert the text length greater than 10
        for (const item of recentPostList){
            const text = await item.getText();
            await expect(text.length).toBeGreaterThan(10);

        }

        //Assert the total length of the list is 4
        await expect(recentPostList).toHaveLenght(4);
    });
});