
export interface EmailTemplateOptions {
  title: string;
  previewText?: string;
  bodyContent: string;
  ctaLink?: string;
  ctaText?: string;
  footerText?: string;
  siteUrl: string;
}

export const getStadiumPortEmailHtml = (options: EmailTemplateOptions): string => {
  const {
    title,
    previewText = 'StadiumPort Update',
    bodyContent,
    ctaLink,
    ctaText,
    footerText = '© 2025 StadiumPort. All rights reserved.',
    siteUrl
  } = options;

  const primaryColor = '#01b47d';
  
  // Ensure siteUrl doesn't have a trailing slash
  const baseUrl = siteUrl.replace(/\/$/, '');
  
  return `
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="x-apple-disable-message-reformatting">
    <title>${title}</title>
    <!--[if mso]>
    <noscript>
        <xml>
            <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
    </noscript>
    <![endif]-->
    <style>
        table, td, div, h1, p {font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';}
        body {margin: 0; padding: 0;}
        .hover-btn:hover {background-color: #019a6b !important;}
        @media screen and (max-width: 600px) {
            .col-3, .col-2 {width: 100% !important; max-width: 100% !important; display: block !important;}
            .mobile-padding {padding-left: 20px !important; padding-right: 20px !important;}
            .mobile-center {text-align: center !important;}
            .mobile-img {width: 100% !important; height: auto !important;}
        }
    </style>
</head>
<body style="margin:0;padding:0;word-spacing:normal;background-color:#f4f4f4;">
    <div style="display:none;font-size:1px;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">
        ${previewText}
    </div>
    <div role="article" aria-roledescription="email" lang="en" style="text-size-adjust:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;background-color:#f4f4f4;">
        <table role="presentation" style="width:100%;border:none;border-spacing:0;">
            <tr>
                <td align="center" style="padding:0;">
                    <!-- Container -->
                    <table role="presentation" style="width:94%;max-width:600px;border:none;border-spacing:0;text-align:left;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#000000;background-color:#ffffff;margin-top:40px;margin-bottom:40px;box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                        
                        <!-- Header / Logo -->
                        <tr>
                            <td style="padding:30px 40px;background-color:#ffffff;text-align:center;">
                                <a href="${baseUrl}" style="text-decoration:none;">
                                    <img src="${baseUrl}/images/Logos/email/stadiumport-email-logo.png" alt="StadiumPort" width="200" style="width:200px;max-width:100%;height:auto;border:none;text-decoration:none;color:#000000;font-weight:bold;font-size:24px;letter-spacing:1px;">
                                </a>
                            </td>
                        </tr>

                        <!-- Hero Section (Optional Image) -->
                        <tr>
                            <td style="padding:0;">
                                <img src="${baseUrl}/images/Logos/email/stadiumport-email-banner.jpg" alt="Stadium Experience" width="600" style="width:100%;max-width:600px;height:auto;border:none;display:block;">
                            </td>
                        </tr>

                        <!-- Main Content -->
                        <tr>
                            <td class="mobile-padding" style="padding:40px 40px 20px 40px;">
                                <h1 style="margin:0 0 20px 0;font-size:32px;line-height:40px;font-weight:bold;color:#000000;letter-spacing:-0.5px;">${title}</h1>
                                <div style="margin:0 0 25px 0;font-size:18px;line-height:30px;color:#444444;">
                                    ${bodyContent}
                                </div>
                            </td>
                        </tr>

                        <!-- CTA Button -->
                        ${ctaLink && ctaText ? `
                        <tr>
                            <td class="mobile-padding" style="padding:0 40px 40px 40px;text-align:center;">
                                <table role="presentation" style="margin:0 auto;border:none;border-spacing:0;">
                                    <tr>
                                        <td align="center" style="background-color:${primaryColor};border-radius:4px;">
                                            <a href="${ctaLink}" class="hover-btn" style="display:inline-block;padding:16px 36px;color:#ffffff;text-decoration:none;font-size:16px;font-weight:bold;border-radius:4px;background-color:${primaryColor};border:1px solid ${primaryColor};transition: background-color 0.3s ease;">
                                                ${ctaText}
                                            </a>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        ` : ''}

                        <!-- Divider -->
                        <tr>
                            <td style="padding:0 40px;">
                                <div style="height:1px;background-color:#eeeeee;line-height:1px;">&nbsp;</div>
                            </td>
                        </tr>

                        <!-- Footer -->
                        <tr>
                            <td style="padding:40px;background-color:#f9f9f9;text-align:center;">
                                <p style="margin:20px 0 10px 0;font-size:12px;line-height:18px;color:#999999;">
                                    ${footerText}
                                </p>
                                <p style="margin:0;font-size:12px;line-height:18px;color:#999999;">
                                    <a href="#" style="color:#999999;text-decoration:underline;">Unsubscribe</a> | <a href="#" style="color:#999999;text-decoration:underline;">Privacy Policy</a>
                                </p>
                            </td>
                        </tr>

                    </table>
                </td>
            </tr>
        </table>
    </div>
</body>
</html>
  `;
};
