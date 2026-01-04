export interface EmailTemplateOptions {
  title: string;
  bodyContent: string;
  siteUrl: string;
}

export const getstadiumportEmailHtml = ({ title, bodyContent, siteUrl }: EmailTemplateOptions) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #01b47d; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { padding: 30px; border: 1px solid #eee; border-top: none; border-radius: 0 0 8px 8px; }
          .footer { text-align: center; font-size: 12px; color: #999; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>stadiumport</h1>
          </div>
          <div class="content">
            <h2>${title}</h2>
            ${bodyContent}
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} stadiumport. All rights reserved.</p>
            <p><a href="${siteUrl}">${siteUrl}</a></p>
          </div>
        </div>
      </body>
    </html>
  `;
};
