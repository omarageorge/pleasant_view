const bookingHTML = (name, email, rooms, guests, arrival, departure, note) => `
<div style="">
<!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#b99366" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
<div style="background:#b99366;background-color:#b99366;margin:0px auto;max-width:600px;">
  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background: #b99366;background-color: #b99366;width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
    <tbody>
      <tr>
        <td style="direction: ltr;font-size: 0px;padding: 30px 0;text-align: center;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
          <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
          <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align: top;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;" width="100%">
              <tbody>
                <tr>
                  <td align="center" style="font-size: 0px;padding: 10px 25px;padding-bottom: 10px;word-break: break-word;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
                    <div style="font-family:Roboto,sans-serif;font-size:25px;line-height:40px;text-align:center;color:#ffffff;">PLEASANT VIEW HOTEL</div>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="font-size: 0px;padding: 10px 25px;word-break: break-word;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
                    <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:16px;line-height:1;text-align:center;color:#1e1400;">New Booking</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!--[if mso | IE]></td></tr></table><![endif]-->
        </td>
      </tr>
    </tbody>
  </table>
</div>
<!--[if mso | IE]></td></tr></table><![endif]-->
<!-- Name -->
<!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#f4f4f4" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
<div style="background:#f4f4f4;background-color:#f4f4f4;margin:0px auto;max-width:600px;">
  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background: #f4f4f4;background-color: #f4f4f4;width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
    <tbody>
      <tr>
        <td style="direction: ltr;font-size: 0px;padding: 20px 10px;text-align: center;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
          <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:290px;" ><![endif]-->
          <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align: top;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;" width="100%">
              <tbody>
                <tr>
                  <td align="left" style="font-size: 0px;padding: 10px 25px;word-break: break-word;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
                    <div style="font-family:sans-serif;font-size:16px;font-weight:600;line-height:1;text-align:left;color:#5a3c00;">Name:</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:290px;" ><![endif]-->
          <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align: top;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;" width="100%">
              <tbody>
                <tr>
                  <td align="left" style="font-size: 0px;padding: 10px 25px;word-break: break-word;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
                    <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:16px;line-height:1;text-align:left;color:#392d1f;">${name}</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!--[if mso | IE]></td></tr></table><![endif]-->
        </td>
      </tr>
    </tbody>
  </table>
</div>
<!--[if mso | IE]></td></tr></table><![endif]-->
<!-- Email -->
<!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#f4f4f4" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
<div style="background:#f4f4f4;background-color:#f4f4f4;margin:0px auto;max-width:600px;">
  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background: #f4f4f4;background-color: #f4f4f4;width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
    <tbody>
      <tr>
        <td style="direction: ltr;font-size: 0px;padding: 20px 10px;text-align: center;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
          <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:290px;" ><![endif]-->
          <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align: top;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;" width="100%">
              <tbody>
                <tr>
                  <td align="left" style="font-size: 0px;padding: 10px 25px;word-break: break-word;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
                    <div style="font-family:sans-serif;font-size:16px;font-weight:600;line-height:1;text-align:left;color:#5a3c00;">Email:</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:290px;" ><![endif]-->
          <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align: top;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;" width="100%">
              <tbody>
                <tr>
                  <td align="left" style="font-size: 0px;padding: 10px 25px;word-break: break-word;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
                    <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:16px;line-height:1;text-align:left;color:#392d1f;">${email}</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!--[if mso | IE]></td></tr></table><![endif]-->
        </td>
      </tr>
    </tbody>
  </table>
</div>
<!--[if mso | IE]></td></tr></table><![endif]-->
<!-- Rooms -->
<!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#f4f4f4" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
<div style="background:#f4f4f4;background-color:#f4f4f4;margin:0px auto;max-width:600px;">
  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background: #f4f4f4;background-color: #f4f4f4;width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
    <tbody>
      <tr>
        <td style="direction: ltr;font-size: 0px;padding: 20px 10px;text-align: center;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
          <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:290px;" ><![endif]-->
          <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align: top;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;" width="100%">
              <tbody>
                <tr>
                  <td align="left" style="font-size: 0px;padding: 10px 25px;word-break: break-word;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
                    <div style="font-family:sans-serif;font-size:16px;font-weight:600;line-height:1;text-align:left;color:#5a3c00;">Number of Rooms:</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:290px;" ><![endif]-->
          <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align: top;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;" width="100%">
              <tbody>
                <tr>
                  <td align="left" style="font-size: 0px;padding: 10px 25px;word-break: break-word;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
                    <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:16px;line-height:1;text-align:left;color:#392d1f;">${rooms}</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!--[if mso | IE]></td></tr></table><![endif]-->
        </td>
      </tr>
    </tbody>
  </table>
</div>
<!--[if mso | IE]></td></tr></table><![endif]-->
<!-- Guests -->
<!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#f4f4f4" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
<div style="background:#f4f4f4;background-color:#f4f4f4;margin:0px auto;max-width:600px;">
  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background: #f4f4f4;background-color: #f4f4f4;width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
    <tbody>
      <tr>
        <td style="direction: ltr;font-size: 0px;padding: 20px 10px;text-align: center;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
          <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:290px;" ><![endif]-->
          <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align: top;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;" width="100%">
              <tbody>
                <tr>
                  <td align="left" style="font-size: 0px;padding: 10px 25px;word-break: break-word;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
                    <div style="font-family:sans-serif;font-size:16px;font-weight:600;line-height:1;text-align:left;color:#5a3c00;">Number of Guests:</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:290px;" ><![endif]-->
          <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align: top;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;" width="100%">
              <tbody>
                <tr>
                  <td align="left" style="font-size: 0px;padding: 10px 25px;word-break: break-word;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
                    <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:16px;line-height:1;text-align:left;color:#392d1f;">${guests}</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!--[if mso | IE]></td></tr></table><![endif]-->
        </td>
      </tr>
    </tbody>
  </table>
</div>
<!--[if mso | IE]></td></tr></table><![endif]-->
<!-- Arrival -->
<!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#f4f4f4" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
<div style="background:#f4f4f4;background-color:#f4f4f4;margin:0px auto;max-width:600px;">
  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background: #f4f4f4;background-color: #f4f4f4;width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
    <tbody>
      <tr>
        <td style="direction: ltr;font-size: 0px;padding: 20px 10px;text-align: center;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
          <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:290px;" ><![endif]-->
          <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align: top;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;" width="100%">
              <tbody>
                <tr>
                  <td align="left" style="font-size: 0px;padding: 10px 25px;word-break: break-word;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
                    <div style="font-family:sans-serif;font-size:16px;font-weight:600;line-height:1;text-align:left;color:#5a3c00;">Arrival Date:</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:290px;" ><![endif]-->
          <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align: top;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;" width="100%">
              <tbody>
                <tr>
                  <td align="left" style="font-size: 0px;padding: 10px 25px;word-break: break-word;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
                    <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:16px;line-height:1;text-align:left;color:#392d1f;">${arrival}</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!--[if mso | IE]></td></tr></table><![endif]-->
        </td>
      </tr>
    </tbody>
  </table>
</div>
<!--[if mso | IE]></td></tr></table><![endif]-->
<!-- Departure -->
<!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#f4f4f4" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
<div style="background:#f4f4f4;background-color:#f4f4f4;margin:0px auto;max-width:600px;">
  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background: #f4f4f4;background-color: #f4f4f4;width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
    <tbody>
      <tr>
        <td style="direction: ltr;font-size: 0px;padding: 20px 10px;text-align: center;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
          <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:290px;" ><![endif]-->
          <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align: top;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;" width="100%">
              <tbody>
                <tr>
                  <td align="left" style="font-size: 0px;padding: 10px 25px;word-break: break-word;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
                    <div style="font-family:sans-serif;font-size:16px;font-weight:600;line-height:1;text-align:left;color:#5a3c00;">Departure Date:</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:290px;" ><![endif]-->
          <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align: top;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;" width="100%">
              <tbody>
                <tr>
                  <td align="left" style="font-size: 0px;padding: 10px 25px;word-break: break-word;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
                    <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:16px;line-height:1;text-align:left;color:#392d1f;">${departure}</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!--[if mso | IE]></td></tr></table><![endif]-->
        </td>
      </tr>
    </tbody>
  </table>
</div>
<!--[if mso | IE]></td></tr></table><![endif]-->
<!-- Note -->
<!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#f4f4f4" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
<div style="background:#f4f4f4;background-color:#f4f4f4;margin:0px auto;max-width:600px;">
  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background: #f4f4f4;background-color: #f4f4f4;width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
    <tbody>
      <tr>
        <td style="direction: ltr;font-size: 0px;padding: 20px 10px;text-align: center;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
          <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:290px;" ><![endif]-->
          <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align: top;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;" width="100%">
              <tbody>
                <tr>
                  <td align="left" style="font-size: 0px;padding: 10px 25px;word-break: break-word;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
                    <div style="font-family:sans-serif;font-size:16px;font-weight:600;line-height:1;text-align:left;color:#5a3c00;">Note:</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:290px;" ><![endif]-->
          <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align: top;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;" width="100%">
              <tbody>
                <tr>
                  <td align="left" style="font-size: 0px;padding: 10px 25px;word-break: break-word;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
                    <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:16px;line-height:1;text-align:left;color:#392d1f;">${note}</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!--[if mso | IE]></td></tr></table><![endif]-->
        </td>
      </tr>
    </tbody>
  </table>
</div>
<!--[if mso | IE]></td></tr></table><![endif]-->
</div>
`;

module.exports = bookingHTML;
