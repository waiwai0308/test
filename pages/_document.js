import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps (ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps
        }
    }

    render() {
        return (
            <Html>
            <Head>
              <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
                async defer />
              <script dangerouslySetInnerHTML={{
                __html: `     
                var onloadCallback = function() {
                  if(document.getElementById('recapcha')) {
                    console.log("onLoad");
                    grecaptcha.render('recapcha', {
                      'sitekey' : '6LeMNdwiAAAAAGuW4Y5DZBJF6--HaIl-XguiZEsU'
                    })
                  }
                };
            `}} />
            </Head>
            <body>
              <Main />
              <NextScript />
            </body>
          </Html>
        )
    }
}