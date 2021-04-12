import { format } from 'date-fns';

export function templateOC(data: any): string {
  const template = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Orden de compra</title>
        <style type="text/css">
          @media (min-width: 1200px) {
            .container {
              max-width: 1140px;
            }
          }
    
          .container {
            margin-top: 10px;
            margin-left: auto;
            margin-right: auto;
          }
    
          .body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
              'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            color: #000;
            text-align: left;
            background-color: #fff;
          }
    
          .center {
            margin-left: auto;
            margin-right: auto;
          }
    
          .table-rounded {
            border: 1px solid black;
            border-radius: 0.3em 0.3em;
            margin-bottom: 30px;
          }
    
          .table-order td,
          .table-order th {
            border: 1px solid gray;
            padding: 5px;
          }
    
          .table-order tbody tr:nth-of-type(odd) {
            background-color: #ebebeb;
          }
    
          .text-right {
            text-align: end;
          }
    
          .text-center {
            text-align: center;
          }
    
          .footer {
            margin-top: 80px;
            margin-bottom: 20px;
          }
        </style>
      </head>
      <body class="body">
        <div class="container">
          <table width="100%" class="center table-rounded">
            <tr>
              <td style="padding-left: 20px">
                <img
                  src="https://tienda-sportfitness.com/wp-content/uploads/2020/01/Logo-Sport-Fitness.jpg"
                  width="150"
                />
              </td>
              <td style="text-align: end; padding-right: 20px">
                <span style="font-size: 1.5rem"
                  >Orden de compra <strong>#@ocNumber@</strong></span
                ><br />
                <span>@date@</span><br />
                <span>Proveedor: <strong>@dropshipperName@</strong></span
                ><br />
                <span>Email: <strong>@dropshipperEmail@</strong></span>
              </td>
            </tr>
          </table>
          @tables@
          <div class="text-center footer">
            Deep Co S.A.S. NIT: 901036745-2 Calle 11A # 31A- 89 Medellín
          </div>
        </div>
      </body>
    </html>`
    .replace('@ocNumber@', data.ocNumber.toString())
    .replace('@date@', format(new Date(), 'yyyy-MM-dd HH:mm:ss'))
    .replace('@dropshipperName@', data.dropshipper.name)
    .replace('@dropshipperEmail@', data.dropshipper.email)
    .replace('@tables@', this.drawTables(data.orders));

  return template;
}

export function drawTables(orders: any): string {
  const allTables = orders.map((order) => {
    let table = `<table
      width="100%"
      class="center table-order"
      cellspacing="0"
      cellpadding="0"
    >
      <thead>
        <tr>
          <th colspan="3" style="text-align: center">
            Guía Coordinadora #@trackingNumber@ - Pedido #@orderNumber@
          </th>
        </tr>
        <tr>
          <th>SKU</th>
          <th>Producto</th>
          <th class="text-right" style="width: 15%">Cantidad</th>
        </tr>
      </thead>
      <tbody>`
      .replace('@trackingNumber@', order.products[0].trackingNumber)
      .replace('@orderNumber@', order.orderNumber.toString());

    const items = order.products.map((product, index) => {
      const backgroundtr = index % 2 ? 'style="background-color: #ebebeb;"' : '';
      return `<tr ${backgroundtr}>
          <td>@sku@</td>
          <td>@productName@</td>
          <td class="text-right">@quantity@</td>
        </tr>`
        .replace('@sku@', product.sku)
        .replace('@productName@', product.name)
        .replace('@quantity@', product.quantity.toString());
    });
    table += items.join('');
    table += `</tbody></table>`;
    return table;
  });
  return allTables.join('<br/><br/>');
}
