### docusaurus-plugin-clarity

This plugin enables you can link your docusaurus site to bing clarity!

#### Install the plugin

1. Add the plugin to your project.

```
yarn add docusaurus-plugin-clarity
```

or

```
npm install docusaurus-plugin-clarity --save
```

2. Configure the plugin in `docusaurus.config.js`

```js
// docusaurus.config.js
module.exports = {
  plugins: ["docusaurus-plugin-clarity"],
  themeConfig: {
    clarity: {
      ID: "Your clarity ID", // Instructions below
    }
  }
};
```

### How to find your clarity ID

1. Open [https://clarity.microsoft.com/](https://clarity.microsoft.com/)
2. Choose your project, so that you're now on the dashboard
3. Select settings, shown in the image below:
![settings](/img/settings.png)
4. Select `setup`
![setup](/img/setup.png)
5. Open the dropdown `How to install clarity`
6. Under the `Clarity tracking code` heading, there will be a piece of code, if you look at the screenshot below, the part underlined in green will be where the `ID` is located. 
![id](/img/id.png)
7. You now have your ID!
