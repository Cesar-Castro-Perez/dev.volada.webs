const { getFooterImages } = require("../../global-urls");

exports.footer = footer;


function footer() {

    let html = `
    <!-- IMAGEN FOOTER -->
    <div class="u-row-container" style="padding: 0px;background-color: transparent">
        <div class="u-row"
            style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
            <div
                style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">

                <div class="u-col u-col-100"
                    style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                    <div
                        style="background-color: #3e4349;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">

                        <div
                            style="height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">


                            <table style="font-family:'Mulish',sans-serif;" role="presentation"
                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                <tbody>
                                    <tr>
                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Mulish',sans-serif;"
                                            align="left">

                                            <table width="100%" cellpadding="0" cellspacing="0"
                                                border="0">
                                                <tr>
                                                    <td style="padding-right: 0px;padding-left: 0px;"
                                                        align="center">

                                                        <img align="center" border="0"
                                                            src="https://firebasestorage.googleapis.com/v0/b/volada-fire-edd42.appspot.com/o/volada_patente_copy_2.png?alt=media&token=e9ee1d18-616e-4e83-9b7d-5609ddd5cbb4"
                                                            alt="Grupo Volada" title=""
                                                            style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 101px;"
                                                            width="101" />

                                                    </td>
                                                </tr>
                                            </table>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
    <!-- END IMAGE FOOTER -->

    <!-- ROW 1, Email Volada, Número Volada -->
    <div class="u-row-container" style="padding: 0px;background-color: transparent">
        <div class="u-row"
            style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
            <div
                style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: #3e4349;">

                <!-- EMAIL -->
                <div class="u-col u-col-50"
                    style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
                    <div
                        style="background-color: #3e4349;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">

                        <div
                            style="height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">

                            <table style="font-family:'Mulish',sans-serif;" role="presentation"
                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                <tbody>
                                    <tr>
                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Mulish',sans-serif;"
                                            align="left">

                                            <div class="menu" style="text-align:center">

                                                <img src="${getFooterImages().emailWhite}"
                                                    alt="" title="">

                                                <a
                                                    style="padding:5px 15px; display:inline-block; color:#ffffff; font-family:'Mulish',sans-serif; font-size:14px; text-decoration:none;">
                                                    <span style="color: #FFFFFF; text-decoration: none">establecimiento@volada.app</span>
                                                </a>

                                            </div>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>

                    </div>
                </div>
                <!-- END EMAIL -->

                <!-- TELÉFONO -->
                <div class="u-col u-col-50"
                    style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
                    <div
                        style="background-color: #3e4349;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">

                        <div
                            style="height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">

                            <table style="font-family:'Mulish',sans-serif;" role="presentation"
                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                <tbody>
                                    <tr>
                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Mulish',sans-serif;"
                                            align="left">

                                            <div class="menu" style="text-align:center">

                                                <img src="${getFooterImages().phoneWhite}"
                                                     alt="" title="">

                                                <span
                                                    style="padding:5px 15px;display:inline-block;color:#ffffff;font-family:'Mulish',sans-serif;font-size:14px">
                                                    933 115 5277
                                                </span>

                                            </div>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>

                    </div>
                </div>
                <!-- END TELÉFONO -->

            </div>
        </div>
    </div>
    <!-- END ROW 1, Email Volada, Número Volada -->

    <!-- ROW 2, Facebook Volada, Twitter Volada, Instagram Volada -->
    <div class="u-row-container" style="padding: 0px;background-color: transparent">
        <div class="u-row"
            style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
            <div
                style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">

                <!-- FACEBOOK -->
                <div class="u-col u-col-33p33"
                    style="max-width: 320px;min-width: 200px;display: table-cell;vertical-align: top;">
                    <div
                        style="background-color: #3e4349;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">

                        <div
                            style="height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">

                            <table style="font-family:'Mulish',sans-serif;" role="presentation"
                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                <tbody>
                                    <tr>
                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Mulish',sans-serif;"
                                            align="left">

                                            <div class="menu" style="text-align:center">

                                                <img src="${getFooterImages().facebookWhite}"
                                                     alt="" title="">

                                                <span
                                                    style="padding:5px 15px;display:inline-block;color:#ffffff;font-family:'Mulish',sans-serif;font-size:14px">
                                                    Grupo volada
                                                </span>

                                            </div>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>

                    </div>
                </div>
                <!-- END FACEBOOK -->

                <!-- TWITTER -->
                <div class="u-col u-col-33p33"
                    style="max-width: 320px;min-width: 200px;display: table-cell;vertical-align: top;">
                    <div
                        style="background-color: #3e4349;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">

                        <div
                            style="height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">

                            <table style="font-family:'Mulish',sans-serif;" role="presentation"
                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                <tbody>
                                    <tr>
                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Mulish',sans-serif;"
                                            align="left">

                                            <div class="menu" style="text-align:center">

                                                <img src="${getFooterImages().twitterWhite}"
                                                     alt="" title="">

                                                <span
                                                    style="padding:5px 15px;display:inline-block;color:#ffffff;font-family:'Mulish',sans-serif;font-size:14px">
                                                    Grupo volada
                                                </span>

                                            </div>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>

                    </div>
                </div>
                <!-- END TWITTER -->

                <!-- INSTAGRAM -->
                <div class="u-col u-col-33p33"
                    style="max-width: 320px;min-width: 200px;display: table-cell;vertical-align: top;">
                    <div
                        style="background-color: #3e4349;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">

                        <div
                            style="height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">

                            <table style="font-family:'Mulish',sans-serif;" role="presentation"
                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                <tbody>
                                    <tr>
                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:7px;font-family:'Mulish',sans-serif;"
                                            align="left">

                                            <div class="menu" style="text-align:center">

                                                <img src="${getFooterImages().instagramWhite}"
                                                    alt="" title=""
                                                    >

                                                <span
                                                    style="padding:8px 15px;display:inline-block;color:#ffffff;font-family:'Mulish',sans-serif;font-size:14px">
                                                    VoladaMx
                                                </span>

                                            </div>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>


                        </div>

                    </div>
                </div>
                <!-- END INSTAGRAM -->

            </div>
        </div>
    </div>
    <!-- END ROW 2, Facebook Volada, Twitter Volada, Instagram Volada -->

    <!-- ESPACIO -->
    <div class="u-row-container" style="padding: 0px;background-color: #cdd4da">
        <div class="u-row"
            style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #cdd4da;">
            <div
                style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">

                <div class="u-col u-col-100"
                    style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                    <div style="background-color: #3e4349;height: 100%;width: 100% !important;">

                        <div
                            style="height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">

                            <table style="font-family:'Mulish',sans-serif;" role="presentation"
                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                <tbody>
                                    <tr>
                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:15px;font-family:'Mulish',sans-serif;"
                                            align="left">

                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
    <!-- END ESPACIO -->
    `;

    return html;
}