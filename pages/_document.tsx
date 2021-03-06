import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
  } from "next/document";
  
  export default class MyDoc extends Document {
    static async getInitialProps(ctx: DocumentContext) {
      const initialProps = await Document.getInitialProps(ctx);
      return initialProps;
    }
    render(): any {
      return (
        <Html>
          <Head />
          <body className="box-border bg-white dark:bg-slate-800">
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }
  