const { footer } = require("./footer");
exports.buildOrderStatusEmailCanceled = buildOrderStatusEmailCanceled;


function buildOrderStatusEmailCanceled(pedido) {

    let html = `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Recibo de pago del periodo</title>

        <!-- Estilos e iconos -->
        <style type="text/css">
            @media only screen and (min-width: 620px) {
                .u-row {
                    width: 600px !important;
                }

                .u-row .u-col {
                    vertical-align: top;
                }

                .u-row .u-col-33p33 {
                    width: 199.98px !important;
                }

                .u-row .u-col-50 {
                    width: 300px !important;
                }

                .u-row .u-col-100 {
                    width: 600px !important;
                }

            }

            @media (max-width: 620px) {
                .u-row-container {
                    max-width: 100% !important;
                    padding-left: 0px !important;
                    padding-right: 0px !important;
                }

                .u-row .u-col {
                    min-width: 320px !important;
                    max-width: 100% !important;
                    display: block !important;
                }

                .u-row {
                    width: calc(100% - 40px) !important;
                }

                .u-col {
                    width: 100% !important;
                }

                .u-col>div {
                    margin: 0 auto;
                }
            }

            body {
                margin: 0;
                padding: 0;
            }

            table,
            tr,
            td {
                vertical-align: top;
                border-collapse: collapse;
            }

            p {
                margin: 0;
            }

            .ie-container table,
            .mso-container table {
                table-layout: fixed;
            }

            * {
                line-height: inherit;
            }

            a[x-apple-data-detectors='true'] {
                color: inherit !important;
                text-decoration: none !important;
            }

            table,
            td {
                color: #000000;
            }

            #u_body a {
                color: #161a39;
                text-decoration: underline;
            }

            .filter-white {
                filter: invert(100%) sepia(84%) saturate(1550%) hue-rotate(184deg) brightness(115%) contrast(100%);
            }

            hr.solid {
                border-top: 0.5px solid #E8EBEF;
                margin-left: 20px;
                margin-right: 20px;
            }
        </style>

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;700&display=swap" rel="stylesheet">

    </head>

    <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #cdd4da;color: #000000">

        <!-- EMAIL -->
        <table id="u_body"
            style="border-collapse: collapse;table-layout: fixed;border-spacing: 0; vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #cdd4da;width:100%"
            cellpadding="0" cellspacing="0">
            <tbody>
                <tr style="vertical-align: top">
                    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">

                        <!-- ESPACIO TOP -->
                        <div class="u-row-container" style="padding: 0px;background-color: #cdd4da">
                            <div class="u-row"
                                style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #cdd4da;">
                                <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">

                                    <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                        <div style="height: 100%;width: 100% !important;">

                                            <div
                                                style="height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">

                                                <table style="font-family:'Mulish',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                                    <tbody>
                                                        <tr>
                                                            <td style="overflow-wrap:break-word;word-break:break-word;padding:15px;font-family:'Mulish',sans-serif;" align="left">

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
                        <!-- END ESPACIO TOP -->

                        <!-- IMAGEN HEADER -->
                        <div class="u-row-container" style="padding: 0px;background-color: transparent">
                            <div class="u-row"
                                style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff; ">
                                <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">

                                    <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                        <div style="background-color: #f8faff;height: 100%;width: 100% !important;">

                                            <div
                                                style="height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">

                                                <table style="font-family:'Mulish',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                                    <tbody>
                                                        <tr>
                                                            <td style="overflow-wrap:break-word;word-break:break-word;padding:25px 10px;font-family:'Mulish',sans-serif;" align="left">

                                                                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                                    <tr>
                                                                        <td style="padding-right: 0px;padding-left: 30px; vertical-align: middle;" align="left">

                                                                            <img align="left" border="0"
                                                                                src="https://firebasestorage.googleapis.com/v0/b/volada-fire-edd42.appspot.com/o/correos%2Fgrupo-volada.png?alt=media&token=05a068ad-514c-4ca8-a146-34df3668975d"
                                                                                alt="Grupo Volada" title="Grupo Volada"
                                                                                style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 168.2px;"
                                                                                width="168.2" />

                                                                        </td>

                                                                        <td style="padding-right: 0px; padding-left: 10px;  vertical-align: middle;" align="right">

                                                                            <p style="font-size: 16px; text-align: start;">
                                                                                GRUPO DE VENTAS OPERACIONES
                                                                            </p>
                                                                            <p style="font-size: 16px; text-align: start;">
                                                                                LOGISTICAS APLICADAS Y DOMICILIADAS
                                                                            </p>
                                                                            <p style="font-size: 16px; text-align: start;">
                                                                                DE AMERICA S. DE R.L. DE C.V.
                                                                            </p>


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
                        <!-- END IMAGEN HEADER -->

                        <!-- CUERPO DEL MENSAJE -->
                        <div class="u-row-container" style="padding: 0px;background-color: transparent">
                            <div class="u-row"
                                style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                                <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">

                                    <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                        <div style="height: 100%;width: 100% !important;">

                                            <div
                                                style="height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">

                                                <!-- TOTAL DEL PERIODO -->
                                                <table style="font-family:'Mulish',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                                    <tbody>
                                                        <tr>
                                                            <td style="overflow-wrap:break-word;word-break:break-word;padding:25px 40px 0px;font-family:'Mulish',sans-serif;"
                                                                align="left">

                                                                <div style="line-height: 140%; text-align: left; word-wrap: break-word;">
                                                                    <p>
                                                                        <span style="font-size: 18px; line-height: 0px; color: #303133; font-family: Mulish, sans-serif;">
                                                                            <b>Total</b>
                                                                        </span>
                                                                    </p>

                                                                    <p style="padding-top: 4px;">
                                                                        <span style="font-size: 20px; line-height: 0px; color: #3AD080; font-family: Mulish, sans-serif;">
                                                                            ${agregaCerosPrecio(pedido.total)}
                                                                        </span>
                                                                    </p>

                                                                </div>

                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <!-- END TOTAL DEL PERIODO -->

                                                <!-- Linea separadora -->
                                                <hr class="solid">

                                                <!-- Detalles del periodo -->
                                                <table style="font-family:'Mulish',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                                    <tbody>
                                                        <tr>
                                                            <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 40px;font-family:'Mulish',sans-serif;" align="left">

                                                                <!-- Detalles del pago del periodo -->
                                                                <table style="width: 100%;">

                                                                    <!-- Número de recibo -->
                                                                    <tr style="height: 35px;">
                                                                        <td style="width: 50%; text-align: left;">
                                                                            <span style="font-size: 18px;"><b>Número de recibo</b></span>
                                                                        </td>

                                                                        <!-- Folio generado por OpenPay -->
                                                                        <td style="width: 50%; text-align: right;">
                                                                            <span><b>${pedido.transfer.order_id}</b></span>
                                                                        </td>
                                                                    </tr>

                                                                    <!-- Periodo -->
                                                                    <tr style="height: 35px;">
                                                                        <td style="width: 50%; text-align: left;">
                                                                            <span style="font-size: 18px;">Periodo</span>
                                                                        </td>

                                                                        <!-- Fecha inicial y final del periodo -->
                                                                        <td style="width: 50%; text-align: right;">
                                                                            <span>${getDayFromTimestamp(pedido.fechaInicial)}${getTimestampToDateFirebase(pedido.fechaFinal)}</span>
                                                                        </td>
                                                                    </tr>

                                                                    <!-- Fecha de expedición -->
                                                                    <tr style="height: 35px;">
                                                                        <td style="width: 50%; text-align: left;">
                                                                            <span style="font-size: 18px;">Fecha de expedición</span>
                                                                        </td>

                                                                        <!-- Fecha en la que se realizo el proceso -->
                                                                        <td style="width: 50%; text-align: right;">
                                                                            <span>${getTimestampToDate(pedido.transfer.creation_date)}</span>
                                                                        </td>
                                                                    </tr>

                                                                    <!-- CLABE destino -->
                                                                    <tr style="height: 35px;">
                                                                        <td style="width: 50%; text-align: left;">
                                                                            <span style="font-size: 18px;">CLABE destino</span>
                                                                        </td>

                                                                        <!-- CLABE del Establecimiento -->
                                                                        <td style="width: 50%; text-align: right;">
                                                                            <span>${cutCLABE(pedido.transfer.bank_account.clabe)}</span>
                                                                        </td>
                                                                    </tr>

                                                                    <!-- Fecha de pago -->
                                                                    <tr style="height: 35px;">
                                                                        <td style="width: 50%; text-align: left;">
                                                                            <span style="font-size: 18px;">Fecha de pago</span>
                                                                        </td>

                                                                        <!-- Fecha en la que se completo el proceso -->
                                                                        <td style="width: 50%; text-align: right;">
                                                                            <span>${getTimestampToDate(pedido.transfer.operation_date)}</span>
                                                                        </td>
                                                                    </tr>

                                                                </table>

                                                                <br>
                                                                <p style="font-size: 14px; line-height: 140%;">
                                                                    <span style="color: #1c2b5e; font-size: 14px; line-height: 19.6px;">
                                                                        <b style="font-size: 20px; line-height: 28px; font-family: Mulish, sans-serif;">
                                                                            Recibo
                                                                        </b>
                                                                    </span>
                                                                </p>
                                                                <br>

                                                                <!-- Detalles del Recibo -->
                                                                <table style="width: 100%;">

                                                                    <!-- Pedidos -->
                                                                    <tr style="height: 35px;">
                                                                        <td style="width: 50%; text-align: left;">
                                                                            <span style="font-size: 18px;">Pedidos</span>
                                                                        </td>

                                                                        <!-- Cantidad de pedidos -->
                                                                        <td style="width: 50%; text-align: right;">
                                                                            <span>${pedido.entregas.length}</span>
                                                                        </td>
                                                                    </tr>

                                                                    <!-- Ventas totales -->
                                                                    <tr style="height: 35px;">
                                                                        <td style="width: 50%; text-align: left;">
                                                                            <span style="font-size: 18px;">Ventas totales</span>
                                                                        </td>

                                                                        <!-- Total de ventas -->
                                                                        <td style="width: 50%; text-align: right;">
                                                                            <span>${agregaCerosPrecio(pedido.ganancia)}</span>
                                                                        </td>
                                                                    </tr>

                                                                    <!-- Comisión Volada (15%) -->
                                                                    <tr style="height: 35px;">
                                                                        <td style="width: 50%; text-align: left;">
                                                                            <span style="font-size: 18px;">Comisión Volada (15%)</span>
                                                                        </td>

                                                                        <!-- Total bruto - total -->
                                                                        <td style="width: 50%; text-align: right;">
                                                                            <span>${getComision(pedido.ganancia, pedido.gananciaBruta)}</span>
                                                                        </td>
                                                                    </tr>

                                                                </table>

                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <!-- END Detalles del periodo -->

                                                <!-- Linea separadora -->
                                                <hr class="solid">

                                                <!-- Importe Pagado -->
                                                <table style="font-family:'Mulish',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                                    <tbody>
                                                        <tr>
                                                            <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 40px;font-family:'Mulish',sans-serif;" align="left">

                                                                <table style="width: 100%;">

                                                                    <!-- Importe pagado -->
                                                                    <tr style="height: 35px;">
                                                                        <td style="width: 50%; text-align: left;">
                                                                            <span style="font-size: 20px;"><b>Importe pagado</b></span>
                                                                        </td>

                                                                        <!-- Total pagado -->
                                                                        <td style="width: 50%; text-align: right;">
                                                                            <span style="font-size: 20px;"><b>${agregaCerosPrecio(pedido.transfer.amount)}</b></span>
                                                                        </td>
                                                                    </tr>

                                                                </table>

                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <!-- END Importe pagado -->

                                                <!-- Banner de Recibo -->
                                                <table style="font-family:'Mulish',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                                    <tbody>
                                                        <tr>
                                                            <td style="overflow-wrap:break-word;word-break:break-word;font-family:'Mulish',sans-serif;" align="middle">

                                                                <table style="width: 100%;">

                                                                    <!-- Imagen-->
                                                                    <tr>
                                                                        <td style="width: 100%;">
                                                                            <img src="https://firebasestorage.googleapis.com/v0/b/volada-fire-edd42.appspot.com/o/imagenes-correos%2Fbanner_recibo_hoop.png?alt=media&token=5c0dbf67-ef4c-41d3-97dd-1c93b5293ae9" alt="" width="600">
                                                                        </td>
                                                                    </tr>

                                                                </table>

                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <!-- END Banner de Recibo -->

                                                <!-- Texto informativo -->
                                                <table style="font-family:'Mulish',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                                    <tbody>
                                                        <tr>
                                                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 40px 30px;font-family:'Mulish',sans-serif;"
                                                                align="middle">

                                                                <p style="font-size: 14px; line-height: 100%;">
                                                                    <span style="font-size: 12px; line-height: 0px; color: #303133; font-family: Mulish, sans-serif;">
                                                                        El pago será visible en tu cuenta tan pronto tu banco lo haya procesado.
                                                                        <br>
                                                                        Para consultas o aclaraciones por favor escribenos a <a href="mailto:establecimiento@volada.app"
                                                                            style="color:#039AE4;">establecimiento@volada.app</a>.
                                                                    </span>
                                                                </p>

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
                        <!-- END CUERPO DEL MENSAJE -->

                    </td>
                </tr>
            </tbody>
        </table>

    </body>

    </html>
    `;
    return html;
}

function getTimestampToDate(timestamp) {
    var meses = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dec'];
    let html = ``;


    if (timestamp) {
        var fecha = new Date(timestamp.seconds * 1000);
        var dateFormat = fecha.getDay() + ' de ' + meses[fecha.getMonth()] + ' del ' + fecha.getFullYear();


        html = `${dateFormat}`;
    }
    else {
        html = `--`;
    }

    return html;
}

function getTimestampToDateFirebase(timestamp) {
    var meses = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dec'];
    let html = ``;


    if (timestamp) {
        var fecha = new Date(timestamp.seconds * 1000);
        var dateFormat = fecha.getDay() + ' de ' + meses[fecha.getMonth()] + ' del ' + fecha.getFullYear();


        html = `${dateFormat}`;
    }
    else {
        html = `--`;
    }

    return html;
}

function getDayFromTimestamp(timestamp) {
    let html = ``;

    if (timestamp) {
        var fecha = new Date(timestamp);
        var dateFormat = fecha.getDay() + ' al ';

        html = `${dateFormat}`;
    }
    else {
        html = ``;
    }

    return html;
}

function agregaCerosPrecio(precio) {
    var precioFinal = 0.00;
    let html = ``;

    if (precio !== 0) {
        precioFinal = precio;
    }
    else {
        precioFinal = 0.00
    }

    html = `$${precioFinal.toFixed(2)}`;

    return html;
}

function cutCLABE(cuenta) {
    let html = ``;

    var tamanioFinal = cuenta.length;
    var tamanioInicial = cuenta.length - 4;
    var cut = cuenta.slice(tamanioInicial, tamanioFinal);

    html = `xxx ${cut}`;

    return html;
}

function getComision(ganancia, gananciaBruta) {
    let html = ``;

    var comision = gananciaBruta - ganancia;

    html = `${agregaCerosPrecio(comision)}`;


    return html;
}