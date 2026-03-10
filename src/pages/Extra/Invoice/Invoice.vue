<template>
  <div class="row">
    <div class="col-lg-11">
      <div class="row invoice-page">
        <div class="col-12">
          <Widget>
            <header>
              <div class="row">
                <div class="col-md-6 col-12 b-col-print-6">
                  <img
                    src="../../../assets/invoice-logo.png"
                    alt="Logo"
                    class="invoiceLogo"
                  >
                </div>
                <div class="col-md-6 col-12 b-col-print-6">
                  <h4 class="text-end">
                    #<span class="fw-semi-bold">9.45613</span> /
                    <small>17 May 2014</small>
                  </h4>
                  <div class="text-muted fs-larger text-end">
                    Some Invoice number description or whatever
                  </div>
                </div>
              </div>
            </header>
            <section class="invoiceBody">
              <div class="row mb-lg">
                <div class="col-sm-6 b-col-print-6">
                  <h5 class="text-muted no-margin">
                    Company Information
                  </h5>
                  <h3 class="company-name m-t-1">
                    Flatlogic LLC
                  </h3>
                  <address>
                    <strong>2 Infinite Loop</strong><br>
                    Minsk, Belarus 220004<br>
                    088.253.5345<br>
                    <abbr title="Work email">e-mail:</abbr>
                    <a href="mailto:#">email@example.com</a><br>
                    <abbr title="Work Phone">phone:</abbr> (012) 345-678-901<br>
                    <abbr title="Work Fax">fax:</abbr> (012) 678-132-901
                  </address>
                </div>

                <div class="col-sm-6 b-col-print-6 text-end">
                  <h5 class="text-muted no-margin">
                    Client Information
                  </h5>
                  <h3 class="client-name m-t-1">
                    Veronica Niasvizhskaja
                  </h3>
                  <address>
                    <strong>Consultant</strong> at
                    <a href="#">Allspana</a><br>
                    <abbr title="Work email">e-mail:</abbr>
                    <a href="mailto:#">maryna@allspana.by</a><br>
                    <abbr title="Work Phone">phone:</abbr> (012) 345-678-901<br>
                    <abbr title="Work Fax">fax:</abbr> (012) 678-132-901
                    <p class="no-margin">
                      <strong>Note:</strong>
                    </p>
                    <p class="text-muted">
                      Some nights I stay up cashing in my bad luck.
                      Some nights I call it a draw
                    </p>
                  </address>
                </div>
              </div>

              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th class="hidden-sm-down d-print-none">
                      Description
                    </th>
                    <th>Quantity</th>
                    <th class="hidden-sm-down d-print-none">
                      Price per Unit
                    </th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Brand-new 27 monitor</td>
                    <td class="hidden-sm-down d-print-none">
                      2,560x1,440-pixel (WQHD) resolution supported!
                    </td>
                    <td>2</td>
                    <td class="hidden-sm-down d-print-none">
                      700
                    </td>
                    <td>1,400.00</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Domain: okendoken.com</td>
                    <td class="hidden-sm-down d-print-none">
                      6-month registration
                    </td>
                    <td>1</td>
                    <td class="hidden-sm-down d-print-none">
                      10.99
                    </td>
                    <td>21.88</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Atlas Shrugged</td>
                    <td class="hidden-sm-down d-print-none">
                      Novel by Ayn Rand, first published in 1957 in the United States
                    </td>
                    <td>5</td>
                    <td class="hidden-sm-down d-print-none">
                      35
                    </td>
                    <td>175.00</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>New Song by Dr. Pre</td>
                    <td class="hidden-sm-down d-print-none">
                      Lyrics: praesent blandit augue non sapien ornare
                      imperdiet
                    </td>
                    <td>1</td>
                    <td class="hidden-sm-down d-print-none">
                      2
                    </td>
                    <td>2.00</td>
                  </tr>
                </tbody>
              </table>

              <div class="row">
                <div class="col-12 col-md-8 b-col-print-6">
                  <p>
                    <strong>Note:</strong>
                    Thank you for your business. Keep in mind,
                    sometimes bad things happen. But it&#39;s just
                    sometimes.
                  </p>
                </div>
                <div class="col-md-4 col-12 b-col-print-6">
                  <div class="row text-end justify-content-end">
                    <div class="col-6" />
                    <div class="col-sm-3">
                      <p>Subtotal</p>
                      <p>Tax(10%)</p>
                      <p class="no-margin">
                        <strong>Total</strong>
                      </p>
                    </div>
                    <div class="col-sm-3">
                      <p>1,598.88</p>
                      <p>159.89</p>
                      <p class="no-margin">
                        <strong>1,758.77</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <p class="text-end mt-lg mb-xs">
                Marketing Consultant
              </p>
              <p class="text-end">
                <span class="fw-semi-bold">Bob Smith</span>
              </p>
              <div class="btn-toolbar mt-lg justify-content-end d-print-none">
                <button
                  class="btn btn-inverse me-2"
                  @click="printInvoice"
                >
                  <i class="fa fa-print" />
                  &nbsp;&nbsp;
                  Print
                </button>
                <button class="btn btn-success">
                  Proceed with Payment
                  &nbsp;
                  <span class="circle bg-white">
                    <i class="fa fa-arrow-right text-success" />
                  </span>
                </button>
              </div>
            </section>
          </Widget>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Widget from '@/components/Widget/Widget.vue';

const printInvoice = () => {
  window.print();
};
</script>

<style src="./Invoice.scss" lang="scss" scoped />
