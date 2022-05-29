module.exports = (hi) => {
    return `<!DOCTYPE html>
    <head>
        <title>Resume - Sahil Kumar Gupta</title>
          <style>
              
      
      
      *::before,
      *::after {
        box-sizing: border-box;
      }
      
      html {
        font-family: sans-serif;
        line-height: 1.15;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        -ms-overflow-style: scrollbar;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      }
      article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
        display: block;
      }
      
      body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        text-align: left;
        background-color: #fff;
      }
      
      [tabindex="-1"]:focus {
        outline: 0 ;
      }
      
      hr {
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }
      
      h1, h2, h3, h4, h5, h6 {
        margin-top: 0;
        margin-bottom: 0.5rem;
      }
      
      p {
        margin-top: 0;
        margin-bottom: 1rem;
      }
      
      abbr[title],
      abbr[data-original-title] {
        text-decoration: underline;
        text-decoration: underline dotted;
        cursor: help;
        border-bottom: 0;
      }
      
      address {
        margin-bottom: 1rem;
        font-style: normal;
        line-height: inherit;
      }
      
      ol,
      ul,
      dl {
        margin-top: 0;
        margin-bottom: 1rem;
      }
      
      ol ol,
      ul ul,
      ol ul,
      ul ol {
        margin-bottom: 0;
      }
      
      dt {
        font-weight: 700;
      }
      
      dd {
        margin-bottom: .5rem;
        margin-left: 0;
      }
      
      blockquote {
        margin: 0 0 1rem;
      }
      
      b,
      strong {
        font-weight: bolder;
      }
      
      small {
        font-size: 80%;
      }
      
      sub,
      sup {
        position: relative;
        font-size: 75%;
        line-height: 0;
        vertical-align: baseline;
      }
      
      sub {
        bottom: -.25em;
      }
      
      sup {
        top: -.5em;
      }
      
      a {
        color: #434E5E;
        text-decoration: none;
        background-color: transparent;
        -webkit-text-decoration-skip: objects;
      }
      
      th {
        text-align: inherit;
      }
      
      label {
        display: inline-block;
        margin-bottom: 0.5rem;
      }
      
      button {
        border-radius: 0;
      }
      
      button:focus {
        outline: 1px dotted;
        outline: 5px auto -webkit-focus-ring-color;
      }
      
      input,
      button,
      select,
      optgroup,
      textarea {
        margin: 0;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
      }
      
      
      
      h1, h2, h3, h4, h5, h6,
      .h1, .h2, .h3, .h4, .h5, .h6 {
        margin-bottom: 0.5rem;
        font-family: inherit;
        font-weight: 500;
        line-height: 1.2;
        color: inherit;
      }
      
      h1, .h1 {
        font-size: 2.5rem;
      }
      
      h2, .h2 {
        font-size: 2rem;
      }
      
      h3, .h3 {
        font-size: 1.75rem;
      }
      
      h4, .h4 {
        font-size: 1.5rem;
      }
      
      h5, .h5 {
        font-size: 1.25rem;
      }
      
      h6, .h6 {
        font-size: 1rem;
      }
      
      .lead {
        font-size: 1.25rem;
        font-weight: 300;
      }
      hr {
        margin-top: 1rem;
        margin-bottom: 1rem;
        border: 0;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
      }
      
      
      .list-unstyled {
        padding-left: 0;
        list-style: none;
      }
      
      .list-inline {
        padding-left: 0;
        list-style: none;
      }
      
      .list-inline-item {
        display: inline-block;
      }
      
      .list-inline-item:not(:last-child) {
        margin-right: 0.5rem;
      }
      
      .initialism {
        font-size: 90%;
        text-transform: uppercase;
      }
      
      .container {
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
      }
      
      .container-fluid {
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
      }
      
      .row {
        display: flex;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
      }
      
      .no-gutters {
        margin-right: 0;
        margin-left: 0;
      }
      
      .no-gutters > .col,
      .no-gutters > [class*="col-"] {
        padding-right: 0;
        padding-left: 0;
      }
      
      .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,
      .col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,
      .col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,
      .col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,
      .col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,
      .col-xl-auto {
        position: relative;
        width: 100%;
        min-height: 1px;
        padding-right: 15px;
        padding-left: 15px;
      }
      
      .col {
        flex-basis: 0;
        flex-grow: 1;
        max-width: 100%;
      }
      
      
      @media print(min-width: 992px) {
        .col-lg {
          flex-basis: 0;
          flex-grow: 1;
          max-width: 100%;
        }
        .col-lg-auto {
          flex: 0 0 auto;
          width: auto;
          max-width: none;
        }
        .col-lg-1 {
          flex: 0 0 8.3333333333%;
          max-width: 8.3333333333%;
        }
        .col-lg-2 {
          flex: 0 0 16.6666666667%;
          max-width: 16.6666666667%;
        }
        .col-lg-3 {
          flex: 0 0 25%;
          max-width: 25%;
        }
        .col-lg-4 {
          flex: 0 0 33.3333333333%;
          max-width: 33.3333333333%;
        }
        .col-lg-5 {
          flex: 0 0 41.6666666667%;
          max-width: 41.6666666667%;
        }
        .col-lg-6 {
          flex: 0 0 50%;
          max-width: 50%;
        }
        .col-lg-7 {
          flex: 0 0 58.3333333333%;
          max-width: 58.3333333333%;
        }
        .col-lg-8 {
          flex: 0 0 66.6666666667%;
          max-width: 66.6666666667%;
        }
        .col-lg-9 {
          flex: 0 0 75%;
          max-width: 75%;
        }
        .col-lg-10 {
          flex: 0 0 83.3333333333%;
          max-width: 83.3333333333%;
        }
        .col-lg-11 {
          flex: 0 0 91.6666666667%;
          max-width: 91.6666666667%;
        }
        .col-lg-12 {
          flex: 0 0 100%;
          max-width: 100%;
        }
        .order-lg-first {
          order: -1;
        }
        .order-lg-last {
          order: 13;
        }
        .order-lg-0 {
          order: 0;
        }
        .order-lg-1 {
          order: 1;
        }
        .order-lg-2 {
          order: 2;
        }
        .order-lg-3 {
          order: 3;
        }
        .order-lg-4 {
          order: 4;
        }
        .order-lg-5 {
          order: 5;
        }
        .order-lg-6 {
          order: 6;
        }
        .order-lg-7 {
          order: 7;
        }
        .order-lg-8 {
          order: 8;
        }
        .order-lg-9 {
          order: 9;
        }
        .order-lg-10 {
          order: 10;
        }
        .order-lg-11 {
          order: 11;
        }
        .order-lg-12 {
          order: 12;
        }
        .offset-lg-0 {
          margin-left: 0;
        }
        .offset-lg-1 {
          margin-left: 8.3333333333%;
        }
        .offset-lg-2 {
          margin-left: 16.6666666667%;
        }
        .offset-lg-3 {
          margin-left: 25%;
        }
        .offset-lg-4 {
          margin-left: 33.3333333333%;
        }
        .offset-lg-5 {
          margin-left: 41.6666666667%;
        }
        .offset-lg-6 {
          margin-left: 50%;
        }
        .offset-lg-7 {
          margin-left: 58.3333333333%;
        }
        .offset-lg-8 {
          margin-left: 66.6666666667%;
        }
        .offset-lg-9 {
          margin-left: 75%;
        }
        .offset-lg-10 {
          margin-left: 83.3333333333%;
        }
        .offset-lg-11 {
          margin-left: 91.6666666667%;
        }
      }
      
      
      .d-none {
        display: none ;
      }
      
      .d-inline {
        display: inline ;
      }
      
      .d-inline-block {
        display: inline-block ;
      }
      
      .d-block {
        display: block ;
      }
      
      .d-table {
        display: table ;
      }
      
      .d-table-row {
        display: table-row ;
      }
      
      .d-table-cell {
        display: table-cell ;
      }
      
      .d-flex {
        display: flex ;
      }
      
      .d-inline-flex {
        display: inline-flex ;
      }
      
      .position-static {
        position: static ;
      }
      
      .position-relative {
        position: relative ;
      }
      
      .position-absolute {
        position: absolute ;
      }
      
      .position-fixed {
        position: fixed ;
      }
      
      .position-sticky {
        position: sticky ;
      }
      
      .fixed-top {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 1030;
      }
      
      .fixed-bottom {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1030;
      }
      
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
      
      .sr-only-focusable:active, .sr-only-focusable:focus {
        position: static;
        width: auto;
        height: auto;
        overflow: visible;
        clip: auto;
        white-space: normal;
      }
      
      .shadow-sm {
        box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) ;
      }
      
      .shadow {
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) ;
      }
      
      .shadow-lg {
        box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) ;
      }
      
      .shadow-none {
        box-shadow: none ;
      }
      
      .w-25 {
        width: 25% ;
      }
      
      .w-50 {
        width: 50% ;
      }
      
      .w-75 {
        width: 75% ;
      }
      
      .w-100 {
        width: 100% ;
      }
      
      .w-auto {
        width: auto ;
      }
      
      .h-25 {
        height: 25% ;
      }
      
      .h-50 {
        height: 50% ;
      }
      
      .h-75 {
        height: 75% ;
      }
      
      .h-100 {
        height: 100% ;
      }
      
      .h-auto {
        height: auto ;
      }
      
      .mw-100 {
        max-width: 100% ;
      }
      
      .mh-100 {
        max-height: 100% ;
      }
      
      .m-0 {
        margin: 0 ;
      }
      
      .mt-0,
      .my-0 {
        margin-top: 0 ;
      }
      
      .mr-0,
      .mx-0 {
        margin-right: 0 ;
      }
      
      .mb-0,
      .my-0 {
        margin-bottom: 0 ;
      }
      
      .ml-0,
      .mx-0 {
        margin-left: 0 ;
      }
      
      .m-1 {
        margin: 0.25rem ;
      }
      
      .mt-1,
      .my-1 {
        margin-top: 0.25rem ;
      }
      
      .mr-1,
      .mx-1 {
        margin-right: 0.25rem ;
      }
      
      .mb-1,
      .my-1 {
        margin-bottom: 0.25rem ;
      }
      
      .ml-1,
      .mx-1 {
        margin-left: 0.25rem ;
      }
      
      .m-2 {
        margin: 0.5rem ;
      }
      
      .mt-2,
      .my-2 {
        margin-top: 0.5rem ;
      }
      
      .mr-2,
      .mx-2 {
        margin-right: 0.5rem ;
      }
      
      .mb-2,
      .my-2 {
        margin-bottom: 0.5rem ;
      }
      
      .ml-2,
      .mx-2 {
        margin-left: 0.5rem ;
      }
      
      .m-3 {
        margin: 1rem ;
      }
      
      .mt-3,
      .my-3 {
        margin-top: 1rem ;
      }
      
      .mr-3,
      .mx-3 {
        margin-right: 1rem ;
      }
      
      .mb-3,
      .my-3 {
        margin-bottom: 1rem ;
      }
      
      .ml-3,
      .mx-3 {
        margin-left: 1rem ;
      }
      
      .m-4 {
        margin: 1.5rem ;
      }
      
      .mt-4,
      .my-4 {
        margin-top: 1.5rem ;
      }
      
      .mr-4,
      .mx-4 {
        margin-right: 1.5rem ;
      }
      
      .mb-4,
      .my-4 {
        margin-bottom: 1.5rem ;
      }
      
      .ml-4,
      .mx-4 {
        margin-left: 1.5rem ;
      }
      
      .m-5 {
        margin: 3rem ;
      }
      
      .mt-5,
      .my-5 {
        margin-top: 3rem ;
      }
      
      .mr-5,
      .mx-5 {
        margin-right: 3rem ;
      }
      
      .mb-5,
      .my-5 {
        margin-bottom: 3rem ;
      }
      
      .ml-5,
      .mx-5 {
        margin-left: 3rem ;
      }
      
      .p-0 {
        padding: 0 ;
      }
      
      .pt-0,
      .py-0 {
        padding-top: 0 ;
      }
      
      .pr-0,
      .px-0 {
        padding-right: 0 ;
      }
      
      .pb-0,
      .py-0 {
        padding-bottom: 0 ;
      }
      
      .pl-0,
      .px-0 {
        padding-left: 0 ;
      }
      
      .p-1 {
        padding: 0.25rem ;
      }
      
      .pt-1,
      .py-1 {
        padding-top: 0.25rem ;
      }
      
      .pr-1,
      .px-1 {
        padding-right: 0.25rem ;
      }
      
      .pb-1,
      .py-1 {
        padding-bottom: 0.25rem ;
      }
      
      .pl-1,
      .px-1 {
        padding-left: 0.25rem ;
      }
      
      .p-2 {
        padding: 0.5rem ;
      }
      
      .pt-2,
      .py-2 {
        padding-top: 0.5rem ;
      }
      
      .pr-2,
      .px-2 {
        padding-right: 0.5rem ;
      }
      
      .pb-2,
      .py-2 {
        padding-bottom: 0.5rem ;
      }
      
      .pl-2,
      .px-2 {
        padding-left: 0.5rem ;
      }
      
      .p-3 {
        padding: 1rem ;
      }
      
      .pt-3,
      .py-3 {
        padding-top: 1rem ;
      }
      
      .pr-3,
      .px-3 {
        padding-right: 1rem ;
      }
      
      .pb-3,
      .py-3 {
        padding-bottom: 1rem ;
      }
      
      .pl-3,
      .px-3 {
        padding-left: 1rem ;
      }
      
      .p-4 {
        padding: 1.5rem ;
      }
      
      .pt-4,
      .py-4 {
        padding-top: 1.5rem ;
      }
      
      .pr-4,
      .px-4 {
        padding-right: 1.5rem ;
      }
      
      .pb-4,
      .py-4 {
        padding-bottom: 1.5rem ;
      }
      
      .pl-4,
      .px-4 {
        padding-left: 1.5rem ;
      }
      
      .p-5 {
        padding: 3rem ;
      }
      
      .pt-5,
      .py-5 {
        padding-top: 3rem ;
      }
      
      .pr-5,
      .px-5 {
        padding-right: 3rem ;
      }
      
      .pb-5,
      .py-5 {
        padding-bottom: 3rem ;
      }
      
      .pl-5,
      .px-5 {
        padding-left: 3rem ;
      }
      
      .m-auto {
        margin: auto ;
      }
      
      .mt-auto,
      .my-auto {
        margin-top: auto ;
      }
      
      .mr-auto,
      .mx-auto {
        margin-right: auto ;
      }
      
      .mb-auto,
      .my-auto {
        margin-bottom: auto ;
      }
      
      .ml-auto,
      .mx-auto {
        margin-left: auto ;
      }
      
      @media print(min-width: 768px) {
        .m-md-0 {
          margin: 0 ;
        }
        .mt-md-0,
        .my-md-0 {
          margin-top: 0 ;
        }
        .mr-md-0,
        .mx-md-0 {
          margin-right: 0 ;
        }
        .mb-md-0,
        .my-md-0 {
          margin-bottom: 0 ;
        }
        .ml-md-0,
        .mx-md-0 {
          margin-left: 0 ;
        }
        .m-md-1 {
          margin: 0.25rem ;
        }
        .mt-md-1,
        .my-md-1 {
          margin-top: 0.25rem ;
        }
        .mr-md-1,
        .mx-md-1 {
          margin-right: 0.25rem ;
        }
        .mb-md-1,
        .my-md-1 {
          margin-bottom: 0.25rem ;
        }
        .ml-md-1,
        .mx-md-1 {
          margin-left: 0.25rem ;
        }
        .m-md-2 {
          margin: 0.5rem ;
        }
        .mt-md-2,
        .my-md-2 {
          margin-top: 0.5rem ;
        }
        .mr-md-2,
        .mx-md-2 {
          margin-right: 0.5rem ;
        }
        .mb-md-2,
        .my-md-2 {
          margin-bottom: 0.5rem ;
        }
        .ml-md-2,
        .mx-md-2 {
          margin-left: 0.5rem ;
        }
        .m-md-3 {
          margin: 1rem ;
        }
        .mt-md-3,
        .my-md-3 {
          margin-top: 1rem ;
        }
        .mr-md-3,
        .mx-md-3 {
          margin-right: 1rem ;
        }
        .mb-md-3,
        .my-md-3 {
          margin-bottom: 1rem ;
        }
        .ml-md-3,
        .mx-md-3 {
          margin-left: 1rem ;
        }
        .m-md-4 {
          margin: 1.5rem ;
        }
        .mt-md-4,
        .my-md-4 {
          margin-top: 1.5rem ;
        }
        .mr-md-4,
        .mx-md-4 {
          margin-right: 1.5rem ;
        }
        .mb-md-4,
        .my-md-4 {
          margin-bottom: 1.5rem ;
        }
        .ml-md-4,
        .mx-md-4 {
          margin-left: 1.5rem ;
        }
        .m-md-5 {
          margin: 3rem ;
        }
        .mt-md-5,
        .my-md-5 {
          margin-top: 3rem ;
        }
        .mr-md-5,
        .mx-md-5 {
          margin-right: 3rem ;
        }
        .mb-md-5,
        .my-md-5 {
          margin-bottom: 3rem ;
        }
        .ml-md-5,
        .mx-md-5 {
          margin-left: 3rem ;
        }
        .p-md-0 {
          padding: 0 ;
        }
        .pt-md-0,
        .py-md-0 {
          padding-top: 0 ;
        }
        .pr-md-0,
        .px-md-0 {
          padding-right: 0 ;
        }
        .pb-md-0,
        .py-md-0 {
          padding-bottom: 0 ;
        }
        .pl-md-0,
        .px-md-0 {
          padding-left: 0 ;
        }
        .p-md-1 {
          padding: 0.25rem ;
        }
        .pt-md-1,
        .py-md-1 {
          padding-top: 0.25rem ;
        }
        .pr-md-1,
        .px-md-1 {
          padding-right: 0.25rem ;
        }
        .pb-md-1,
        .py-md-1 {
          padding-bottom: 0.25rem ;
        }
        .pl-md-1,
        .px-md-1 {
          padding-left: 0.25rem ;
        }
        .p-md-2 {
          padding: 0.5rem ;
        }
        .pt-md-2,
        .py-md-2 {
          padding-top: 0.5rem ;
        }
        .pr-md-2,
        .px-md-2 {
          padding-right: 0.5rem ;
        }
        .pb-md-2,
        .py-md-2 {
          padding-bottom: 0.5rem ;
        }
        .pl-md-2,
        .px-md-2 {
          padding-left: 0.5rem ;
        }
        .p-md-3 {
          padding: 1rem ;
        }
        .pt-md-3,
        .py-md-3 {
          padding-top: 1rem ;
        }
        .pr-md-3,
        .px-md-3 {
          padding-right: 1rem ;
        }
        .pb-md-3,
        .py-md-3 {
          padding-bottom: 1rem ;
        }
        .pl-md-3,
        .px-md-3 {
          padding-left: 1rem ;
        }
        .p-md-4 {
          padding: 1.5rem ;
        }
        .pt-md-4,
        .py-md-4 {
          padding-top: 1.5rem ;
        }
        .pr-md-4,
        .px-md-4 {
          padding-right: 1.5rem ;
        }
        .pb-md-4,
        .py-md-4 {
          padding-bottom: 1.5rem ;
        }
        .pl-md-4,
        .px-md-4 {
          padding-left: 1.5rem ;
        }
        .p-md-5 {
          padding: 3rem ;
        }
        .pt-md-5,
        .py-md-5 {
          padding-top: 3rem ;
        }
        .pr-md-5,
        .px-md-5 {
          padding-right: 3rem ;
        }
        .pb-md-5,
        .py-md-5 {
          padding-bottom: 3rem ;
        }
        .pl-md-5,
        .px-md-5 {
          padding-left: 3rem ;
        }
        .m-md-auto {
          margin: auto ;
        }
        .mt-md-auto,
        .my-md-auto {
          margin-top: auto ;
        }
        .mr-md-auto,
        .mx-md-auto {
          margin-right: auto ;
        }
        .mb-md-auto,
        .my-md-auto {
          margin-bottom: auto ;
        }
        .ml-md-auto,
        .mx-md-auto {
          margin-left: auto ;
        }
      }
      
      
      .text-monospace {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
      }
      
      .text-justify {
        text-align: justify ;
      }
      
      .text-nowrap {
        white-space: nowrap ;
      }
      .text-left {
        text-align: left ;
      }
      
      .text-right {
        text-align: right ;
      }
      
      .text-center {
        text-align: center ;
      }
      
      
      .font-weight-light {
        font-weight: 300 ;
      }
      
      .font-weight-normal {
        font-weight: 400 ;
      }
      
      .font-weight-bold {
        font-weight: 700 ;
      }
      
      .font-italic {
        font-style: italic ;
      }
      
      .text-white {
        color: #fff ;
      }
      
      .text-primary {
        color: #434E5E ;
      }
      
      a.text-primary:hover, a.text-primary:focus {
        color: #2e3540 ;
      }
      
      .text-secondary {
        color: #58677c ;
      }
      
      a.text-secondary:hover, a.text-secondary:focus {
        color: #434e5e ;
      }
      
      .text-success {
        color: #28a745 ;
      }
      
      a.text-success:hover, a.text-success:focus {
        color: #1e7e34 ;
      }
      
      .text-info {
        color: #17a2b8 ;
      }
      
      a.text-info:hover, a.text-info:focus {
        color: #117a8b ;
      }
      
      .text-warning {
        color: #ffc107 ;
      }
      
      a.text-warning:hover, a.text-warning:focus {
        color: #d39e00 ;
      }
      
      .text-danger {
        color: #dc3545 ;
      }
      
      a.text-danger:hover, a.text-danger:focus {
        color: #bd2130 ;
      }
      /*************************** Pillar Styles ****************************/
      body {
        font-family: 'Roboto', sans-serif;
        background: #F7F8FA;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #434E5E;
      }
      
      .theme-bg-primary {
        background-color: #434E5E;
      }
      .resume-wrapper {
        padding-top: 30px;
        padding-bottom: 60px;
      }
      
      .resume-wrapper-inner {
        max-width: 1000px;
      }
      
      .resume-header {
        background: #434E5E;
        color: rgba(255, 255, 255, 0.9);
        height: 220px;
      }
      
      
      .resume-header .name {
        font-size: 2.25rem;
        letter-spacing: 0.175rem;
        font-weight: 900;
      }
      
      .resume-header .title {
        font-size: 1.5rem;
      }
      
      .resume-header a {
        color: rgba(255, 255, 255, 0.6);
      }
      
      .resume-social {
        font-size: 0.875rem;
      }
      
      .resume-social .fa-container {
        font-size: 1rem;
        display: inline-block;
        width: 24px;
        height: 24px;
        border-radius: 0.125rem;
        background: white;
        color: #434E5E;
      }
      
      .resume-section-title {
        font-size: 1.25rem;
        position: relative;
        color: #434E5E;
      }
      
      .resume-section-title:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1.5px;
        background: #8d9aad;
      }
      
      .resume-section-content {
        color: #58677c;
      }
      
      .resume-timeline {
        padding-left: 2rem;
      }
      
      .resume-timeline:before {
        content: "";
        display: inline-block;
        width: 3px;
        height: 100%;
        background: #aab4c3;
        left: 6px;
        top: 4px;
        position: absolute;
      }
      
      .resume-timeline-item:before {
        content: "";
        display: inline-block;
        position: absolute;
        left: -32px;
        top: 3px;
        width: 15px;
        height: 15px;
        border: 4px solid #58677c;
        background: white;
        border-radius: 50%;
      }
      
      .resume-company-name {
        color: #58677c;
        font-size: 0.875rem;
        font-weight: 500;
      }
      
      .resume-position-time {
        font-size: 0.875rem;
        color: #aab4c3;
      }
      
      .resume-position-title {
        font-size: 1.125rem;
        color: #434E5E;
      }
      
      .resume-degree-org {
        font-size: 0.9rem;
      }
      .resume-grade{
        font-size: 0.8rem;
      }
      
      .resume-degree-time {
        color: #aab4c3;
        font-size: 0.875rem;
      }
      
      .resume-award-icon {
        left: 0;
        top: 4px;
        color: #aab4c3;
      }
      
      .resume-award-name {
        font-weight: bold;
        color: #434E5E;
      }
      
      .resume-award-desc {
        font-size: 0.875rem;
      }
       a {
    color:#2287C9;
    text-decoration: underline;
    }
    
    a:active {
    color:#2287C9;
    text-decoration: underline;
    }
    
    a:visited {
    color:#2287C9;
    text-decoration: underline;
    }
    
    a:hover {
    color:#339900;
    text-decoration: underline;
    }
      </style>
        <link href="css_resume.css" rel="stylesheet" />
        <script defer src="https://use.fontawesome.com/releases/v5.1.1/js/all.js" integrity="sha384-BtvRZcyfv4r0x/phJt9Y9HhnN5ur1Z+kZbKVgzVBAlQZX4jvAuImlIz+bG7TS00a" crossorigin="anonymous"></script>
        <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:300,400,500,600&display=swap" rel="stylesheet">
    </head> 
    <body>	
      <article class="resume-wrapper text-center position-relative">
        <div class="mx-auto text-left bg-white shadow-lg">
            <header class="resume-header pt-md-0">
                <div class="p-4 mr-0 mx-lg-0" style="display: flex;justify-content: space-between">
                    <div class="p-4 mx-auto mx-lg-0" style="display: flex;">
                        <div class="primary-info">
                                <h1 class="name mt-0 mb-1 text-white text-uppercase text-uppercase">Sahil Kumar Gupta</h1>
                                
                                <ul class="list-unstyled">
                                    <li>B. Tech - Mathematics and Computing</li>
                                    <li>IIT Guwahati</li>
                                </ul>
                                <ul class="list-unstyled">
                                    <li class="mb-2"><a href="g.sahil@iitg.ac.in"><i class="far fa-envelope fa-fw mr-2" data-fa-transform="grow-3"></i>g.sahil@iitg.ac.in</a></li>
                                    <li><a><i class="fas fa-mobile-alt fa-fw mr-2" data-fa-transform="grow-6"></i>+91 7091405187</a></li>
                                </ul>
                            </div>
                            <div class="secondary-info ml-md-auto mt-2">
                                <ul class="resume-social list-unstyled">
                                    <li class="mb-3"><a href="https://github.com/sahil2609"><span class="fa-container text-center mr-2"><i class="fab fa-github"></i></span>GitHub</a></li>
                                    <li class="mb-3"><a href="www.linkedin.com/in/sahil2609"><span class="fa-container text-center mr-2"><i class="fab fa-linkedin"></i></i></span>LinkedIn</a></li>
                                    <li class="mb-3"><a href="https://www.instagram.com/sahil._.2632/"><span class="fa-container text-center mr-2"><i class="fa fa-instagram"></i></span>Social Media</a></li>
                                    <li><a href="https://www.instagram.com/sahil._.2632/"><span class="fa-container text-center mr-2"><i class="fa fa-globe"></i></span>Website</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
                <div class="resume-body p-5">
                    <div class="row">
                        <div class="col-lg-9">
                            <section class="resume-section experience-section mb-5">
                                <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Experience</h2>
                                <div class="resume-section-content">
                                    <div class="resume-timeline position-relative">
                                        <article class="resume-timeline-item position-relative pb-5">
                                            
                                            <div class="resume-timeline-item-header mb-2">
                                                <div class="d-flex flex-column flex-md-row">
                                                    <h3 class="resume-position-title font-weight-bold mb-1">Students Web Committee</h3>
                                                    <div class="resume-company-name ml-auto">
                                                        Senior Web Developer</div>
                                                </div>
                                                <div class="resume-position-time">2018 — 2019</div>
                                            </div><!--//resume-timeline-item-header-->
                                            <div class="resume-timeline-item-desc">
                                                <p>Developed and deployed a curtain raiser for an executive summary release prepared by IIT Guwahati, IIT Mandi
                                                    & IISc Bangalore in 11 hours using HTML/CSS/Anime.js.
                                                    Frontend development using tailwind for multiple projects under SWC.</p>
                                            </div>
    
                                        </article>
    
                                        <article class="resume-timeline-item position-relative pb-5">
                                            
                                            <div class="resume-timeline-item-header mb-2">
                                                <div class="d-flex flex-column flex-md-row">
                                                    <h3 class="resume-position-title font-weight-bold mb-1">Students Web Committee</h3>
                                                    <div class="resume-company-name ml-auto">
                                                        Senior Web Developer</div>
                                                </div>
                                                <div class="resume-position-time">2018 — 2019</div>
                                            </div><!--//resume-timeline-item-header-->
                                            <div class="resume-timeline-item-desc">
                                                <p>Developed and deployed a curtain raiser for an executive summary release prepared by IIT Guwahati, IIT Mandi
                                                    & IISc Bangalore in 11 hours using HTML/CSS/Anime.js.
                                                    Frontend development using tailwind for multiple projects under SWC.</p>
                                            </div>
    
                                        </article>
                                    </div>
                      </body>
                                    
                                </div>
                            </section>
    
                            <section class="resume-section experience-section mb-5">
                                <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Projects</h2>
                                <div class="resume-section-content">
                                    <div class="resume-timeline position-relative">
                                        <article class="resume-timeline-item position-relative pb-5">
                                            
                                            <div class="resume-timeline-item-header mb-2">
                                                <div class="d-flex flex-column flex-md-row">
                                                    <h3 class="resume-position-title font-weight-bold mb-1">Live Location Tracking</h3>
                                                    <div class="resume-company-name ml-auto">
                                                    <a href = "https://github.com/sahil2609/LiveLocationTrackingProject" >GitHub</a></div>
                                                </div>
                                            </div><!--//resume-timeline-item-header-->
                                            <div class="resume-timeline-item-desc">
                                                <p>
                                                    A flutter application to track the location of your loved ones. Users can create a group and share their location in
    that with features like updating password, deleting your account, option to leave the group.
    Key Technologies: Dart, Flutter, Firebase
                                                </p>
                                            </div>
    
                                        </article>
    
                                        <article class="resume-timeline-item position-relative pb-5">
                                            
                                            <div class="resume-timeline-item-header mb-2">
                                                <div class="d-flex flex-column flex-md-row">
                                                    <h3 class="resume-position-title font-weight-bold mb-1">Live Location Tracking</h3>
                                                    <div class="resume-company-name ml-auto">
                                                    <a href = "https://github.com/sahil2609/LiveLocationTrackingProject" >GitHub</a></div>
                                                </div>
                                            </div><!--//resume-timeline-item-header-->
                                            <div class="resume-timeline-item-desc">
                                                <p>
                                                    A flutter application to track the location of your loved ones. Users can create a group and share their location in
    that with features like updating password, deleting your account, option to leave the group.
    Key Technologies: Dart, Flutter, Firebase
                                                </p>
                                            </div>
    
                                        </article>
    
                                        <article class="resume-timeline-item position-relative pb-5">
                                            
                                            <div class="resume-timeline-item-header mb-2">
                                                <div class="d-flex flex-column flex-md-row">
                                                    <h3 class="resume-position-title font-weight-bold mb-1">Live Location Tracking</h3>
                                                    <div class="resume-company-name ml-auto">
                                                    <a href = "https://github.com/sahil2609/LiveLocationTrackingProject" >GitHub</a></div>
                                                </div>
                                            </div><!--//resume-timeline-item-header-->
                                            <div class="resume-timeline-item-desc">
                                                <p>
                                                    A flutter application to track the location of your loved ones. Users can create a group and share their location in
    that with features like updating password, deleting your account, option to leave the group.
    Key Technologies: Dart, Flutter, Firebase
                                                </p>
                                            </div>
    
                                        </article>
    
                                        <article class="resume-timeline-item position-relative pb-5">
                                            
                                            <div class="resume-timeline-item-header mb-2">
                                                <div class="d-flex flex-column flex-md-row">
                                                    <h3 class="resume-position-title font-weight-bold mb-1">Live Location Tracking</h3>
                                                    <div class="resume-company-name ml-auto">
                                                    <a href = "https://github.com/sahil2609/LiveLocationTrackingProject" >GitHub</a></div>
                                                </div>
                                            </div><!--//resume-timeline-item-header-->
                                            <div class="resume-timeline-item-desc">
                                                <p>
                                                    A flutter application to track the location of your loved ones. Users can create a group and share their location in
    that with features like updating password, deleting your account, option to leave the group.
    Key Technologies: Dart, Flutter, Firebase
                                                </p>
                                            </div>
    
                                        </article>
                                        
                                        
                                    </div>
                      </body>
                                    
                                    
                                    
                                    
                                    
                                    
                                </div>
                            </section>
                            <section class="resume-section experience-section mb-5">
                                <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Extracurriculars and Achievements</h2>
                                <div class="resume-section-content">
                                    <div class="resume-timeline position-relative">
                                        <article class="resume-timeline-item position-relative pb-2">
                                            
                                            <div class="resume-timeline-item-header mb-1.5">
                                                <div class="d-flex flex-column flex-md-row">
                                                    <h3 class="resume-position-title font-weight-bold mb-1">Joint Entrance Examination Advanced 2020</h3>
                                                </div>
                                            </div><!--//resume-timeline-item-header-->
                                            <div class="resume-timeline-item-desc">
                                                <p>
                                                    Secured All India Rank 3461 among 0.15 million candidates appearing for the test.
                                                </p>
                                            </div>
    
                                        </article>
                                        <article class="resume-timeline-item position-relative pb-2">
                                            
                                            <div class="resume-timeline-item-header mb-1.5">
                                                <div class="d-flex flex-column flex-md-row">
                                                    <h3 class="resume-position-title font-weight-bold mb-1">Joint Entrance Examination Advanced 2020</h3>
                                                </div>
                                            </div><!--//resume-timeline-item-header-->
                                            <div class="resume-timeline-item-desc">
                                                <p>
                                                    Secured All India Rank 3461 among 0.15 million candidates appearing for the test.
                                                </p>
                                            </div>
    
                                        </article>
                                        <article class="resume-timeline-item position-relative pb-2">
                                            
                                            <div class="resume-timeline-item-header mb-1.5">
                                                <div class="d-flex flex-column flex-md-row">
                                                    <h3 class="resume-position-title font-weight-bold mb-1">Joint Entrance Examination Advanced 2020</h3>
                                                </div>
                                            </div><!--//resume-timeline-item-header-->
                                            <div class="resume-timeline-item-desc">
                                                <p>
                                                    Secured All India Rank 3461 among 0.15 million candidates appearing for the test.
                                                </p>
                                            </div>
    
                                        </article>
                                        <article class="resume-timeline-item position-relative pb-2">
                                            
                                            <div class="resume-timeline-item-header mb-1.5">
                                                <div class="d-flex flex-column flex-md-row">
                                                    <h3 class="resume-position-title font-weight-bold mb-1">Joint Entrance Examination Advanced 2020</h3>
                                                </div>
                                            </div><!--//resume-timeline-item-header-->
                                            <div class="resume-timeline-item-desc">
                                                <p>
                                                    Secured All India Rank 3461 among 0.15 million candidates appearing for the test.
                                                </p>
                                            </div>
    
                                        </article>
                                        <article class="resume-timeline-item position-relative pb-2">
                                            
                                            <div class="resume-timeline-item-header mb-1.5">
                                                <div class="d-flex flex-column flex-md-row">
                                                    <h3 class="resume-position-title font-weight-bold mb-1">Completed Macroeconomics and Microeconomics Courses</h3>
                                                </div>
                                            </div><!--//resume-timeline-item-header-->
                                            <div class="resume-timeline-item-desc">
                                                <p>
                                                    Analysed the macro and micro factors of aviation industry and the economics factors behind the revival of Jet Airways
                                                </p>
                                            </div>
    
                                        </article>
                                        <article class="resume-timeline-item position-relative pb-2">
                                            
                                            <div class="resume-timeline-item-header mb-1.5">
                                                <div class="d-flex flex-column flex-md-row">
                                                    <h3 class="resume-position-title font-weight-bold mb-1">Joint Entrance Examination Advanced 2020</h3>
                                                </div>
                                            </div><!--//resume-timeline-item-header-->
                                            <div class="resume-timeline-item-desc">
                                                <p>
                                                    Secured All India Rank 3461 among 0.15 million candidates appearing for the test.
                                                </p>
                                            </div>
    
                                        </article>
                                    </div>
                                    
    
                      </body>
                                    
                                </div>
                            </section>
                        </div>
                        
                        <div class="col-lg-3">
                            
                            <section class="resume-section education-section mb-5">
                                <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Education</h2>
                                <div class="resume-section-content">
                                    <ul class="list-unstyled">
                                        <li class="mb-2">
                                            <div class="d-flex flex-column flex-md-row">
                                                <div class="resume-degree-org font-weight-bold mb-1">B. Tech</div>
                                                <div class="resume-degree-time ml-auto">2020 — 2024</div>
                                            </div>
                                            <div class="resume-degree-org font-weight-bold mb-1">Indian Institute of Technology, Guwahati</div>
                                            <div class="resume-grade">CGPA - 8.60</div>
                                        </li>
                                        <hr>    
                                        <li class="mb-2">
                                            <div class="d-flex flex-column flex-md-row">
                                                <div class="resume-degree-org font-weight-bold mb-1">Senior Secondary</div>
                                                <div class="resume-degree-time ml-auto">2018 - 2020</div>
                                            </div>
                                            <div class="resume-degree-org font-weight-bold mb-1">CBSE Board</div>
                                            <div class="resume-grade">CGPA/Percentage - 95.6%</div>
                                        </li>
                                        <hr> 
                                        <li class="mb-2">
                                            <div class="d-flex flex-column flex-md-row">
                                                <div class="resume-degree-org font-weight-bold mb-1">Secondary</div>
                                                <div class="resume-degree-time ml-auto">2016 - 2018</div>
                                            </div>
                                            <div class="resume-degree-org font-weight-bold mb-1">CBSE Board</div>
                                            <div class="resume-grade">CGPA/Percentage - 94.6%</div>
                                        </li>
                                        <hr> 
                                    </ul>
                                </div>
                            </section>
                            <section class="resume-section reference-section mb-5">
                                <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Skills</h2>
                                <div class="resume-section-content">
                                    <ul class="list-unstyled resume-awards-list">
                                        <li class="mb-2 pl-4 position-relative">
                                            <i class="resume-award-icon fas fa-trophy position-absolute" data-fa-transform="shrink-2"></i>
                                            <div class="resume-award-name">Programming</div>
                                            <div class="resume-award-desc">HTML, CSS, JavaScript, NodeJs, ReactJs, Flutter*, Django*, OpenCV*</div>
                                        </li>
                                        <hr> 
                                        <li class="mb-2 pl-4 position-relative">
                                            <i class="resume-award-icon fas fa-trophy position-absolute" data-fa-transform="shrink-2"></i>
                                            <div class="resume-award-name">Programming</div>
                                            <div class="resume-award-desc">HTML, CSS, JavaScript, NodeJs, ReactJs, Flutter*, Django*, OpenCV*</div>
                                        </li>
                                        <hr> 
                                        <li class="mb-2 pl-4 position-relative">
                                            <i class="resume-award-icon fas fa-trophy position-absolute" data-fa-transform="shrink-2"></i>
                                            <div class="resume-award-name">Programming</div>
                                            <div class="resume-award-desc">HTML, CSS, JavaScript, NodeJs, ReactJs, Flutter*, Django*, OpenCV*</div>
                                        </li>
                                        <hr> 
                                        <li class="mb-2 pl-4 position-relative">
                                            <i class="resume-award-icon fas fa-trophy position-absolute" data-fa-transform="shrink-2"></i>
                                            <div class="resume-award-name">Programming</div>
                                            <div class="resume-award-desc">HTML, CSS, JavaScript, NodeJs, ReactJs, Flutter*, Django*, OpenCV*</div>
                                        </li>
                                        <hr>    
                                        <li class="mb-2 pl-4 position-relative">
                                            <i class="resume-award-icon fas fa-trophy position-absolute" data-fa-transform="shrink-2"></i>
                                            <div class="resume-award-name">Programming</div>
                                            <div class="resume-award-desc">HTML, CSS, JavaScript, NodeJs, ReactJs, Flutter*, Django*, OpenCV*</div>
                                        </li>
                                        <hr>  
                                        <li class="mb-2 pl-4 position-relative">
                                            <i class="resume-award-icon fas fa-trophy position-absolute" data-fa-transform="shrink-2"></i>
                                            <div class="resume-award-name">Programming</div>
                                            <div class="resume-award-desc">HTML, CSS, JavaScript, NodeJs, ReactJs, Flutter*, Django*, OpenCV*</div>
                                        </li>
                                        <hr>  
                                    </ul>
                                    <div style="text-align: right;"><i >* denotes Elementary Proficiency</i></div>
                                </div>
                            </section>
                            <section class="resume-section education-section mb-5">
                                <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Positions of Responsibility</h2>
                                <div class="resume-section-content">
                                    <ul class="list-unstyled">
                                        <li class="mb-2">
                                            <div class="d-flex flex-column flex-md-row">
                                                <div class="resume-degree-org font-weight-bold mb-1">Senior Executive</div>
                                                <div class="resume-degree-time ml-auto">June 2021 — Jan. 2022</div>
                                            </div>
                                            <div class="resume-grade">E-Cell, IIT Guwahati</div>
                                        </li>
                                        <hr>    
                                        <li class="mb-2">
                                            <div class="d-flex flex-column flex-md-row">
                                                <div class="resume-degree-org font-weight-bold mb-1">Co-ordinator</div>
                                                <div class="resume-degree-time ml-auto">June 2021 — Jan. 2022</div>
                                            </div>
                                            <div class="resume-grade">Coding Club, IIT Guwahati</div>
                                        </li>
                                        <hr> 
                                        <li class="mb-2">
                                            <div class="d-flex flex-column flex-md-row">
                                                <div class="resume-degree-org font-weight-bold mb-1">Conference Affairs Coordinator</div>
                                                <div class="resume-degree-time ml-auto">June 2021 — Jan. 2022</div>
                                            </div>
                                            <div class="resume-grade">MUN, IIT Guwahati</div>
                                        </li>
                                        <hr> 
                                    </ul>
                                </div>
                            </section>
                            
                        </div>
                    </div>
                </div>
                
                
            </div>
        </article>  
      
    
    </body>
    </html> `;
}