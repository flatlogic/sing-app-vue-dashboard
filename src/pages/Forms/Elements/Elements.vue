<template>
  <div class="forms-elements">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">YOU ARE HERE</li>
      <li class="active breadcrumb-item">Form Elements</li>
    </ol>
    <h1 class="page-title">Form - <span class="fw-semi-bold">Inputs & Controls</span>
    </h1>
    <b-row>
      <b-col lg='6' md='12'>
        <Widget title="<h6> Inputs </h6>" customHeader settings refresh close>
          <b-form-group>
            <b-form>
              <legend><strong>Horizontal</strong> form</legend>
              <b-form-group
                horizontal
                label="Normal field"
                label-for="normal-field"
                label-class="text-md-right"
                :label-cols="4"
                breakpoint="md"
              >
                <b-form-input type="text" id="normal-field" placeholder="May have placeholder" />
              </b-form-group>
              <b-form-group
                horizontal
                label-for="normal-field"
                label-class="text-md-right"
                :label-cols="4"
                breakpoint="md"
              >
                <div slot="label">
                  Label hint
                  <span class="help-block">Some help text</span>
                </div>
                <b-form-input type="text" id="label-hint"/>
              </b-form-group>
              <b-form-group
                horizontal
                label="Tooltip enabled"
                label-for="tooltip-field"
                label-class="text-md-right"
                :label-cols="4"
                breakpoint="md"
              >
                <b-form-input
                  type="text" id="tooltip-field"
                  v-b-tooltip.hover title="Some explanation text here"
                />
              </b-form-group>
              <b-form-group
                horizontal
                label="Disabled input"
                label-for="disabled-field"
                label-class="text-md-right"
                :label-cols="4"
                breakpoint="md"
              >
                <b-form-input type="text" id="disabled-field" disabled value="Default value" />
              </b-form-group>
              <b-form-group
                horizontal
                label="Max length"
                label-for="length-field"
                label-class="text-md-right"
                :label-cols="4"
                breakpoint="md"
              >
                <b-form-input
                  type="text"
                  id="length-field"
                  :formatter="(v) => v.length <= 3 ? v : v.substring(0, 3)"
                  placeholder="Max length 3 characters"/>
              </b-form-group>
              <b-form-group
                horizontal
                label="Prepended input"
                label-for="prepended-field"
                label-class="text-md-right"
                :label-cols="4"
                breakpoint="md"
              >
                <b-input-group id="prepended-field">
                  <b-input-group-text slot="prepend">
                    <i class="fa fa-user" />
                  </b-input-group-text>
                  <b-form-input></b-form-input>
                </b-input-group>
              </b-form-group>
              <b-form-group
                horizontal
                label="Password"
                label-for="password-field"
                label-class="text-md-right"
                :label-cols="4"
                breakpoint="md"
              >
                <b-input-group id="password-field">
                  <b-input-group-text slot="prepend">
                    <i class="fa fa-lock" />
                  </b-input-group-text>
                  <b-form-input type="password"></b-form-input>
                </b-input-group>
              </b-form-group>
              <b-form-group
                horizontal
                label="Appended input"
                label-for="append-field"
                label-class="text-md-right"
                :label-cols="4"
                breakpoint="md"
              >
                <b-input-group id="append-field" append=".00">
                  <b-form-input></b-form-input>
                </b-input-group>
              </b-form-group>
              <b-form-group
                horizontal
                label="Combined input"
                label-for="combined-field"
                label-class="text-md-right"
                :label-cols="4"
                breakpoint="md"
              >
                <b-input-group id="combined-field" append=".00" prepend="$">
                  <b-form-input></b-form-input>
                </b-input-group>
              </b-form-group>
              <b-form-group
                horizontal
                label="Append Transparent"
                label-for="transparent-field"
                label-class="text-md-right"
                :label-cols="4"
                breakpoint="md"
              >
                <b-input-group id="transparent-field" class="input-group-transparent">
                  <b-input-group-text class="bg-transparent" slot="append">
                    <i class="fa fa-camera" />
                  </b-input-group-text>
                  <b-form-input></b-form-input>
                </b-input-group>
              </b-form-group>
              <b-form-group
                horizontal
                class="form-action"
                label=""
                label-for="transparent-field"
                :label-cols="4"
                breakpoint="md"
              >
                <b-button variant="primary" type="submit" class="mr-xs">Save Changes</b-button>
                <b-button variant="inverse">Cancel</b-button>
              </b-form-group>
            </b-form>
          </b-form-group>
        </Widget>
      </b-col>
      <b-col lg='6' md='12'>
        <Widget
          title="<h6> Prepended and appended inputs </h6>"
          customHeader settings refresh close
        >
          <b-form-group>
            <b-form>
              <legend><strong>Default</strong> form</legend>
              <b-form-group
                label="Search type input"
                label-for="search-field"
                breakpoint="md"
                >
                <b-row>
                  <b-col md="8">
                    <b-input-group>
                      <b-form-input id="search-field" type="text"></b-form-input>
                      <b-input-group-append>
                        <b-btn variant="default">Search</b-btn>
                      </b-input-group-append>
                    </b-input-group>
                  </b-col>
                </b-row>
              </b-form-group>
             <b-form-group
                label="Whole bar appended"
                label-for="bar-field"
                breakpoint="md"
                >
                <b-row>
                  <b-col md="8">
                    <b-input-group>
                      <b-form-input id="bar-field" type="text"></b-form-input>
                      <b-input-group-append>
                        <b-btn variant="danger"><i class="fa fa-pencil"/></b-btn>
                        <b-btn variant="warning"><i class="fa fa-plus"/></b-btn>
                        <b-btn variant="success"><i class="fa fa-refresh"/></b-btn>
                      </b-input-group-append>
                    </b-input-group>
                  </b-col>
                </b-row>
              </b-form-group>
              <b-form-group
                label="Actions dropdown"
                label-for="actions-field"
                breakpoint="md"
                >
                <b-row>
                  <b-col md="8">
                    <b-input-group>
                      <b-form-input id="actions-field" type="text"></b-form-input>
                      <b-input-group-append>
                        <b-dropdown text="Action" variant="success">
                          <b-dropdown-item href="#">Action</b-dropdown-item>
                          <b-dropdown-item href="#">Another action</b-dropdown-item>
                          <b-dropdown-item href="#">Something else here</b-dropdown-item>
                          <b-dropdown-divider />
                          <b-dropdown-item href="#">Separated link</b-dropdown-item>
                        </b-dropdown>
                      </b-input-group-append>
                    </b-input-group>
                  </b-col>
                </b-row>
              </b-form-group>
              <b-form-group
                label="Segmented dropdown"
                label-for="segmented-field"
                description="Anything can be appended to the right"
                breakpoint="md"
                >
                <b-row>
                  <b-col md="8">
                    <b-input-group>
                      <b-form-input id="segmented-field" type="text"></b-form-input>
                      <b-input-group-append>
                        <b-button variant="warning">Action</b-button>
                        <b-dropdown variant="warning">
                          <b-dropdown-item href="#">Action</b-dropdown-item>
                          <b-dropdown-item href="#">Another action</b-dropdown-item>
                          <b-dropdown-item href="#">Something else here</b-dropdown-item>
                          <b-dropdown-divider />
                          <b-dropdown-item href="#">Separated link</b-dropdown-item>
                        </b-dropdown>
                      </b-input-group-append>
                    </b-input-group>
                  </b-col>
                </b-row>
              </b-form-group>
              <b-form-group
                label="Types dropdown"
                label-for="types-field"
                description="You can select some type of a field just right in the place."
                breakpoint="md"
                >
                <b-row>
                  <b-col md="8">
                    <b-input-group>
                      <b-form-input id="types-field" type="text"></b-form-input>
                      <b-input-group-append>
                        <b-dropdown variant="primary" :text="typesDropdown">
                          <b-dropdown-item-button @click="changeTypesDropdown('Another type')">
                            Another type
                          </b-dropdown-item-button>
                          <b-dropdown-item-button @click="changeTypesDropdown('Type one')">
                            Type one
                          </b-dropdown-item-button>
                          <b-dropdown-item-button @click="changeTypesDropdown('Next type')">
                            Next type
                          </b-dropdown-item-button>
                        </b-dropdown>
                      </b-input-group-append>
                    </b-input-group>
                  </b-col>
                </b-row>
              </b-form-group>
              <b-form-group
                label="Transparent input"
                label-for="transparent-field"
                description="With gray-light background. White by default."
                breakpoint="md"
                >
                <b-row>
                  <b-col md="8">
                    <b-form-input id="tranparent-field" class="input-no-border bg-gray-lighter"
                      type="text" placeholder="Search Dashboard"></b-form-input>
                  </b-col>
                </b-row>
              </b-form-group>
              <b-form-group class="form-action">
                <b-button variant="inverse" type="submit" class="mr-xs">Save Changes</b-button>
                <b-button variant="default">Cancel</b-button>
              </b-form-group>
            </b-form>
          </b-form-group>
        </Widget>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg='8' md='12'>
        <Widget
          title="<h6> Form <span class='fw-semi-bold'>Options</span></h6>"
          settingsInverse refresh close customHeader
        >
          <b-form>
            <legend>Control sizing</legend>
            <p>
              Set input heights using parameters like <code>size=&apos;lg&apos;</code> and
              <code>size=&apos;sm&apos;</code>.
              Also works with <code>type=&apos;search&apos;</code> inputs, input groups and
              selects.
            </p>
            <br />
            <b-form-group>
              <b-form-input type="text" placeholder='size="lg"' size="lg" />
            </b-form-group>
            <b-form-group>
              <b-form-input type="text" placeholder="default input" />
            </b-form-group>
            <b-form-group>
              <b-form-input type="text" placeholder='size="sm"' size="sm" />
            </b-form-group>
          </b-form>
        </Widget>
      </b-col>
      <b-col lg='4' md='12'>
        <Widget
          title="<h6> Form <span class='fw-semi-bold'>Options</span></h6>"
          settingsInverse refresh close customHeader
        >
          <b-form>
            <legend> Input Groups</legend>
            <p>
              Different colors & sizes for any elements including input groups. Elements may be
              easily styled with classes like <code>.bg-primary</code> or
              <code>.bg-transparent</code>
            </p>
            <br />
            <b-form-group>
              <b-input-group>
                <b-input-group-text slot="prepend" class="bg-transparent">
                  <i class="fa fa-github-alt" />
                </b-input-group-text>
                <b-form-input type="text" placeholder="First Name" size="16" />
              </b-input-group>
            </b-form-group>
            <b-form-group>
              <b-input-group size="lg">
                <b-input-group-text slot="prepend">
                  <i class="fa fa-bars" />
                </b-input-group-text>
                <b-form-input type="text" placeholder="Username" size="16" />
              </b-input-group>
            </b-form-group>
            <b-form-group>
              <b-input-group size="sm">
                <b-form-input type="text" placeholder="City" />
                <b-input-group-text slot="append" class="bg-danger text-white">
                  <i class="fa fa-code-fork" />
                </b-input-group-text>
              </b-input-group>
            </b-form-group>
          </b-form>
        </Widget>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg='6' md='12'>
        <Widget
          title="<h6><i class='fa fa-font'></i>Textareas</h6>"
          customHeader settings refresh close
        >
          <b-form>
            <legend>Small form</legend>
            <b-form-group
                horizontal
                label="Default textarea"
                label-for="default-textarea"
                label-class="text-md-right"
                :label-cols="3"
                breakpoint="md"
              >
                <b-form-textarea :rows="3" id="default-textarea"/>
            </b-form-group>
            <b-form-group
                horizontal
                label="Auto-growing textarea"
                label-for="autosize-textarea"
                label-class="text-md-right"
                :label-cols="3"
                breakpoint="md"
              >
                <textarea-autosize
                  placeholder="Try to add few new lines..."
                  class="form-control"
                  :min-height="75"
                  id="autosize-textarea"
                />
            </b-form-group>
            <b-form-group
                horizontal
                label-for="wysiwyg-textarea"
                label-class="text-md-right"
                :label-cols="3"
                breakpoint="md"
              >
                <div slot="label">
                  Wysiwyg
                  <span class="help-block">With bottom toolbar appended</span>
                </div>
                <trumbowyg  id="wysiwyg-textarea" v-model="wygContent"></trumbowyg>
                <div class="text-md-right mt-sm">
                  <b-button variant="danger">Save</b-button>
                  <b-button variant="default">Clear</b-button>
                </div>
            </b-form-group>
            <b-form-group
                horizontal
                label="Markdown Editor"
                label-for="markdown-editor"
                label-class="text-md-right"
                :label-cols="3"
                breakpoint="md"
              >
                <mavon-editor id="markdown-editor" language="en" v-model="mdContent"/>
                <a class="text-muted d-flex align-items-center mt-sm" href="http://commonmark.org/help/" target="_blank" rel="noopener noreferrer">
                  <!-- eslint-disable -->
                  <svg aria-hidden="true" class="markdown-help-svg" height="16" version="1.1" viewBox="0 0 16 16" width="16">
                    <path fill-rule="evenodd" fill="#798892" d="M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z"></path>
                  </svg>
                  <!-- eslint-enable -->
                  <span class="ml-xs">Markdown styling is supported</span>
                </a>
            </b-form-group>
          </b-form>
        </Widget>
      </b-col>

      <b-col lg='6' md='12'>
        <Widget
          title="<h6><i class='fa fa-list-alt'></i> Selects </h6>"
          refresh close settings customHeader
        >
          <b-form class="form-label-left">
            <legend>Default form with labels on left</legend>
            <b-form-group
              horizontal
              label="Default select"
              label-for="default-select"
              :label-cols="4"
            >
              <b-row>
                <b-col md='9'>
                  <v-select
                    id="default-select"
                    v-model="defaultSelect"
                    :options="['Large Magellanic Cloud', 'Andromeda Galaxy', 'SextansA']"
                  />
                </b-col>
              </b-row>
            </b-form-group>
            <b-form-group
              horizontal
              label="Select with search"
              label-for="search-select"
              :label-cols="4"
            >
              <b-row>
                <b-col md='9'>
                  <v-select
                    id="search-select"
                    v-model="searchSelect"
                    :options="[
                      'Dallas Cowboys',
                      'New York Giants',
                      'Philadelphia Eagles',
                      'Washington Redskins'
                    ]"
                  />
                </b-col>
              </b-row>
            </b-form-group>
          </b-form>
          <b-form>
            <legend>Dropdown based colored selects</legend>
            <b-form-group
              horizontal
              label="Simple select"
              label-for="simple-select"
              description="Auto size"
              :label-cols="4"
            >
              <b-dropdown id="simple-select" :text="simpleDropdownVariant" variant="default">
                <b-dropdown-item-button
                  @click="changeSelectOption('simpleDropdownVariant', 'Option One')"
                >Option One</b-dropdown-item-button>
                <b-dropdown-item-button
                  @click="changeSelectOption('simpleDropdownVariant', 'Option Two')"
                >Option Two</b-dropdown-item-button>
                <b-dropdown-item-button
                  @click="changeSelectOption('simpleDropdownVariant', 'Option Three')"
                >Option Three</b-dropdown-item-button>
              </b-dropdown>
            </b-form-group>
            <b-form-group
              horizontal
              label-for="danger-select"
              :label-cols="4"
            >
              <div slot="label">
                Colored ones <br>
                <span class="help">A bit of Japanese</span>
              </div>
              <b-dropdown id="danger-select" :text="dangerDropdownVariant" variant="danger">
                <b-dropdown-item-button
                  @click="changeSelectOption('dangerDropdownVariant', 'Ichi')"
                >Ichi</b-dropdown-item-button>
                <b-dropdown-item-button
                  @click="changeSelectOption('dangerDropdownVariant', 'Ni')"
                >Ni</b-dropdown-item-button>
                <b-dropdown-item-button
                  @click="changeSelectOption('dangerDropdownVariant', 'San')"
                >San</b-dropdown-item-button>
              </b-dropdown>
              <b-dropdown :text="warningDropdownVariant" variant="warning">
                <b-dropdown-item-button
                  @click="changeSelectOption('warningDropdownVariant', 'Shi')"
                >Shi</b-dropdown-item-button>
                <b-dropdown-item-button
                  @click="changeSelectOption('warningDropdownVariant', 'Go')"
                >Go</b-dropdown-item-button>
                <b-dropdown-item-button
                  @click="changeSelectOption('warningDropdownVariant', 'Roku')"
                >Roku</b-dropdown-item-button>
              </b-dropdown>
              <b-dropdown :text="successDropdownVariant" variant="success">
                <b-dropdown-item-button
                  @click="changeSelectOption('successDropdownVariant', 'Hichi')"
                >Hichi</b-dropdown-item-button>
                <b-dropdown-item-button
                  @click="changeSelectOption('successDropdownVariant', 'Hachi')"
                >Hachi</b-dropdown-item-button>
                <b-dropdown-item-button
                  @click="changeSelectOption('successDropdownVariant', 'Ku')"
                >Ku</b-dropdown-item-button>
                <b-dropdown-item-button
                  @click="changeSelectOption('successDropdownVariant', 'Ju')"
                >Ju</b-dropdown-item-button>
              </b-dropdown>
            </b-form-group>
            <b-form-group
              horizontal
              label-for="big-select"
              :label-cols="4"
            >
              <div slot="label">
                  Big one <br>
                  <span class="help-block">
                    Size can be controlled with <code>size='lg'</code> & <code>size='sm'</code>
                  </span>
                </div>
              <b-dropdown id="big-select" size="lg" :text="bigDropdownVariant" variant="default">
                <b-dropdown-item-button
                  @click="changeSelectOption('bigDropdownVariant', 'Fourth Item')"
                >Fourth Item</b-dropdown-item-button>
                <b-dropdown-item-button
                  @click="changeSelectOption('bigDropdownVariant', 'Fifth Item')"
                >Fifth Item</b-dropdown-item-button>
                <b-dropdown-item-button
                  @click="changeSelectOption('bigDropdownVariant', 'Sixth Item')"
                >Sixth Item</b-dropdown-item-button>
              </b-dropdown>
            </b-form-group>
          </b-form>
        </Widget>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="12">
        <Widget
          title="<h6> Checkbox <strong>Controls</strong></h6>"
          settingsInverse refresh lose customHeader
        >
          <b-row>
            <b-col lg='4'>
              <b-form>
                <legend>Basic</legend>
                <p>
                  Supports bootstrap brand colors: <code>.abc-checkbox-primary</code>,
                  <code>.abc-checkbox-info</code>
                  etc.
                  Pure <abbr title="Cascading Style Sheet">css</abbr> solution with no
                  javascript.
                  Let your checkboxes shine!
                </p>
                <b-form-group class="abc-checkbox">
                  <input
                    type="checkbox"
                    id="checkbox-default"
                  />
                  <label for="checkbox-default">Default</label>
                </b-form-group>
                <b-form-group class="abc-checkbox abc-checkbox-primary">
                  <input
                    type="checkbox"
                    id="checkbox-primary"
                    :checked="true"
                  />
                  <label for="checkbox-primary">Primary</label>
                </b-form-group>
                 <b-form-group class="abc-checkbox abc-checkbox-success">
                  <input
                    type="checkbox"
                    id="checkbox-success"
                  />
                  <label for="checkbox-success">Success</label>
                </b-form-group>
                <b-form-group class="abc-checkbox abc-checkbox-info">
                  <input
                    type="checkbox"
                    id="checkbox-info"
                    :checked="true"
                  />
                  <label for="checkbox-info">Info</label>
                </b-form-group>
                <b-form-group class="abc-checkbox abc-checkbox-warning">
                  <input
                    type="checkbox"
                    id="checkbox-warning"
                    :checked="true"
                  />
                  <label for="checkbox-warning">Warning</label>
                </b-form-group>
                <b-form-group class="abc-checkbox abc-checkbox-danger">
                  <input
                    type="checkbox"
                    id="checkbox-danger"
                    :checked="true"
                  />
                  <label for="checkbox-danger">Check me out</label>
                </b-form-group>
              </b-form>
            </b-col>

            <b-col lg="4">
              <b-form>
                <legend>Circled</legend>
                <p>
                  <code>.abc-checkbox-circle</code> for roundness. No more sad controls
                  controls.
                  Check out this brand-new rounded checkboxes!
                </p>
                <b-form-group class="abc-checkbox abc-checkbox abc-checkbox-circle ">
                  <input
                    type="checkbox"
                    id="checkbox-circle"
                  />
                  <label for="checkbox-circle">Simle Rounded</label>
                </b-form-group>
                <b-form-group class="abc-checkbox abc-checkbox-info abc-checkbox-circle ">
                  <input
                    type="checkbox"
                    id="checkbox-circle-info"
                    :checked="true"
                  />
                  <label for="checkbox-circle-info">Me too</label>
                </b-form-group>
              </b-form>
            </b-col>
            <b-col lg='4'>
              <b-form>
                <legend>Disabled</legend>
                <p>
                  Disabled state also supported. Full stack checkbox functionality.
                </p>
                <b-form-group class="abc-checkbox">
                  <input
                    type="checkbox"
                    id="checkbox-disabled"
                    disabled
                  />
                  <label for="checkbox-disabled">Can't check this</label>
                </b-form-group>
                <b-form-group class="abc-checkbox abc-checkbox-success">
                  <input
                    type="checkbox"
                    id="checkbox-disabled-success"
                    :checked="true"
                    disabled
                  />
                  <label for="checkbox-disabled-success">This too</label>
                </b-form-group>
                <b-form-group class="abc-checkbox abc-checkbox-warning">
                  <input
                    type="checkbox"
                    id="checkbox-disabled-warning"
                    :checked="true"
                    disabled
                  />
                  <label for="checkbox-disabled-warning">And this</label>
                </b-form-group>
              </b-form>
            </b-col>
          </b-row>
          <p class="fs-mini">Built with <a
            href="https://github.com/flatlogic/awesome-bootstrap-checkbox"
            rel="noopener noreferrer" target="_blank"
          >awesome-bootstrap-checkbox</a>.
          </p>
        </Widget>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="12">
        <Widget
          title="<h6>Radio <strong>Controls</strong></h6>"
          settingsInverse refresh lose customHeader
        >
          <b-row>
            <b-col lg='4'>
              <b-form>
                <legend>Basic</legend>
                <p>
                  Supports bootstrap brand colors: <code>.abc-radio-primary</code>,
                  <code>.abc-radio-danger</code> etc. Pure css solution with no
                  javascript. Let your radios shine!
                </p>
                <b-row>
                  <b-col md="6">
                    <b-form-group class="radio abc-radio">
                      <input
                        type="radio"
                        name="radio1"
                        id="radio-small"
                        checked
                      />
                      <label for="radio-small">Small</label>
                    </b-form-group>
                    <b-form-group class="radio abc-radio">
                      <input
                        type="radio"
                        name="radio1"
                        id="radio-big"
                      />
                      <label for="radio-big">Big</label>
                    </b-form-group>
                  </b-col>
                  <b-col md="6">
                    <b-form-group class="radio abc-radio abc-radio-danger">
                      <input
                        type="radio"
                        name="radio2"
                        id="radio-next"
                      />
                      <label for="radio-next">Next</label>
                    </b-form-group>
                    <b-form-group class="radio abc-radio abc-radio-danger">
                      <input
                        type="radio"
                        name="radio2"
                        id="radio-one"
                        checked
                      />
                      <label for="radio-one">One</label>
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-form>
            </b-col>

            <b-col lg="4">
              <b-form>
                <legend>Disabled</legend>
                <p>
                  Disabled state also supported. Full stack radios functionality.
                </p>
                <b-form-group class="radio abc-radio">
                  <input
                    type="radio"
                    name="radio3"
                    id="radio-disabled-next"
                    disabled
                  />
                  <label for="radio-disabled-next">Next</label>
                </b-form-group>
                <b-form-group class="radio abc-radio abc-radio-warning">
                  <input
                    type="radio"
                    name="radio3"
                    id="radio-disabled-one"
                    disabled
                    checked
                  />
                  <label for="radio-disabled-one">One</label>
                </b-form-group>
              </b-form>
            </b-col>
            <b-col lg='4'>
              <b-form>
                <legend>Cool iOS-like switches</legend>
                <p>
                  Simple component that helps you turn your default HTML
                  checkbox inputs into beautiful iOS 7 style switches in
                  just few simple steps.
                </p>
                <b-form-group class="display-inline-block checkbox-ios">
                  <label for="checkbox-ios1" class="switch  form-control-label">
                    <input type="checkbox" id="checkbox-ios1"
                      class="ios form-check-input" value="off">
                    <i></i>
                  </label>
                </b-form-group>
                <b-form-group class="display-inline-block checkbox-ios">
                  <label for="checkbox-ios2" class="switch  form-control-label">
                    <input type="checkbox" id="checkbox-ios2"
                      class="ios form-check-input" value="on" checked="">
                    <i></i>
                  </label>
                </b-form-group>
              </b-form>
            </b-col>
          </b-row>
        </Widget>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="6" md="12">
        <Widget title="<h6>Pickers</h6>" customHeader close refresh settingsInverse>
          <b-form>
            <legend>Date & Time</legend>
            <b-form-group>
              <b-row>
                <b-col xs="6">
                  <label for="datetimepicker">Datepicker</label>
                  <DatePicker lang="en" :placeholder="datepickerText"
                    input-class="form-control" @change="selectDate">
                    <i class="glyphicon glyphicon-th" slot="calendar-icon" />
                  </DatePicker>
                </b-col>
                <b-col xs="6">
                  <label for="datetimepicker">With time</label>
                  <DatePicker lang="en" type="datetime" :placeholder="datetimepickerText"
                    input-class="form-control" @change="selectDatetime">
                    <i class="fa fa-clock-o" slot="calendar-icon" />
                  </DatePicker>
                </b-col>
              </b-row>
            </b-form-group>
          </b-form>
          <b-form>
            <legend>Colors</legend>
            <b-form-group>
              <label for="colorpickeri">
                Simple select
                <span class="help-block">
                  Colorpicker widget powered by
                  <a href="https://github.com/xiaokaike/vue-color" target="_blank">vue-color</a> plugin
                </span>
                <b-input-group class="colorpicker-wrapper">
                  <input type="text" class="form-control" :value="color.hex" />
                  <Chrome
                    :class="{ colorpicker: true, 'd-none': !isPickerActive }"
                    v-model="color"
                  />
                  <b-input-group-text @click="isPickerActive = !isPickerActive" slot="append">
                    <div class="rect" :style="{ backgroundColor: color.hex }"/>
                  </b-input-group-text>
                </b-input-group>
              </label>
            </b-form-group>
          </b-form>
        </Widget>
      </b-col>
      <b-col lg="6" md="12">
        <Widget title="<h6> Input <strong>Masks</strong></h6>"
          customHeader close settingsInverse refresh>
          <b-form class="form-label-left">
            <legend>Masked inputs</legend>
            <b-form-group horizontal label-for="phone-mask">
              <div slot="label" md="4" xs="12">
                Phone
                <span class="help-block">(123) 456-7890</span>
              </div>
              <b-col md="9">
                <input class="form-control" id="phone-mask" type="text"
                  placeholder="(___) ___-____"
                  v-mask="'(###) ###-####'"
                  v-model="phoneModel" />
              </b-col>
            </b-form-group>
            <b-form-group horizontal label-for="int-phone-mask">
              <div slot="label" md="4" xs="12">
                International Phone
                <span class="help-block">+375 123 456 789</span>
              </div>
              <b-col md="9">
                <input class="form-control" id="int-phone-mask" type="text"
                  placeholder="+___ ___ ___ ___"
                  v-mask="'+### ### ### ###'"
                  v-model="intPhoneModel" />
              </b-col>
            </b-form-group>
            <b-form-group horizontal label-for="date-mask">
              <div slot="label" md="4" xs="12">
                Date Format
                <span class="help-block">07-03-2013</span>
              </div>
              <b-col md="9">
                <input class="form-control"  id="date-mask" type="text"
                  placeholder="__-__-____"
                  v-mask="'##-##-####'"
                  v-model="dateModel" />
              </b-col>
            </b-form-group>
            <b-form-group horizontal label-for="time-mask">
              <div slot="label" md="4" xs="12">
                Time
                <span class="help-block">13:43</span>
              </div>
              <b-col md="9">
                <input class="form-control" id="time-mask" type="text"
                  placeholder="__:__"
                  v-mask="'##:##'"
                  v-model="timeModel" />
              </b-col>
            </b-form-group>
          </b-form>
        </Widget>
      </b-col>
    </b-row>
    <b-row>
      <b-col xs="12">
        <Widget title="<h6>Sliders</h6>"
          customHeader settingsInverse close refresh>
          <b-row>
            <b-col lg="4">
              <h4>Color Options</h4>
              <p>Sing extends Bootstrap Slider and provides different color options:</p>
              <b-form>
                <div class="mb-sm">
                  <b-form-slider
                    :value='14'
                    :max='20'
                  />
                </div>
                <div class="slider-danger mb-sm">
                  <b-form-slider
                    :value='18'
                    :max='20'
                  />
                </div>
                <div class="slider-warning mb-sm">
                 <b-form-slider
                    :value='7'
                    :max='20'
                  />
                </div>
                <div class="slider-success mb-sm">
                  <b-form-slider
                    :value='11'
                    :max='20'
                  />
                </div>
                <div class="slider-inverse mb-sm">
                  <b-form-slider
                    :value='4'
                    :max='20'
                  />
                </div>
              </b-form>
            </b-col>
            <b-col lg="4">
              <h4>Slider Orientation</h4>
              <p>
                Vertical orientation is also possible. Simply changing <strong>
                data-slider-orientation </strong>
                attribute does the thing.
              </p>
              <b-row>
                <b-col md="8">
                  <span class="">
                    <b-form-slider
                      :value='14'
                      :max='20'
                      orientation="vertical"
                    />
                  </span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span class="slider-inverse">
                    <b-form-slider
                      :value='18'
                      :max='20'
                      orientation="vertical"
                    />
                  </span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span class="">
                    <b-form-slider
                      :value='7'
                      :max='20'
                      orientation="vertical"
                    />
                  </span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span class="slider-inverse">
                    <b-form-slider
                      :value='11'
                      :max='20'
                      orientation="vertical"
                    />
                  </span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span class="">
                    <b-form-slider
                      :value='4'
                      :max='20'
                      orientation="vertical"
                    />
                  </span>
                </b-col>
              </b-row>
            </b-col>
            <b-col lg="4">
              <h4>Range Selector</h4>
              <p>Range selector, options specified via <strong>data-slider-value</strong>
                attribute as
                an array. Price range selector:</p>
              <span class="slider-warning">
                <b-form-slider
                  :max="2000"
                  :value="[200, 1547]" range
                />
                &nbsp;
              </span>
            </b-col>
          </b-row>
        </Widget>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="6" md={12}>
        <Widget
          title="<h6>Simple <strong>file uploads</strong></h6>"
          customHeader settingsInverse close refresh
        >
          <b-form>
            <blockquote class="blockquote blockquote-reverse">
              <p>The man who is really serious, with the urge to find out what truth is, has no
                style at all. He lives only in what is.</p>
              <footer>Bruce Lee</footer>
            </blockquote>

            <b-form-group
              horizontal
              label="File input widget"
              :label-cols="4"
              label-for="fileupload1"
              label-text-align="right"
              breakpoint="md"
            >
              <b-input-group class="fileinput fileinput-new">
                <input
                  @change="onChangeInputFiles"
                  id="fileupload1"
                  type="file" name="file" class="display-none"
                />
                <label for="fileupload1" class="form-control">
                  <div v-if="inputFiles.length > 0">
                    <span v-for="file in inputFiles"
                      :key="`select-id-${file.name.split('.')[0].toString()}`"
                    >
                      {{file.name}}
                    </span>
                  </div>
                  <span v-else />
                </label>
                <b-input-group-append v-if="inputFiles.length === 0">
                  <b-button type="button" variant="default" class="btn-file">
                    <label for="fileupload1">Select file</Label>
                  </b-button>
                </b-input-group-append>
                <b-input-group-append v-else>
                  <b-button type="button" variant="default">
                    <Label for="fileupload1">Change file</Label>
                  </b-button>
                  <b-button
                    type="reset" variant="default"
                    @click="removeFiles"
                  >
                    <label>Remove file</label>
                  </b-button>
                </b-input-group-append>
              </b-input-group>
              <span class="help-block">
                Awesome file input plugin allows you to create a visually appealing
                file or image inputs.
              </span>
            </b-form-group>
            <b-form-group
              horizontal
              label="Image upload widget"
              label-for="fileupload2"
              label-text-align="right"
              :label-cols="4"
            >
              <input
                accept="image/*" @change="onChangeInputImage"
                id="fileupload2"
                type="file" name="file" class="display-none"
              />
              <div class="fileinput fileinput-new fileinput-fix">
                <div class="fileinput-new thumbnail">
                  <div v-if="imageFiles.length > 0">
                    <div
                      class="image-preview"
                      v-for="image in imageFiles"
                      :key="`img-id-${image.toString()}`"
                      :style="{ backgroundImage: `url(${image.preview})`}"
                    />
                  </div>
                  <img v-else
                    alt="..."
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5v
                    cmcvMjAwMC9zdmciIHdpZHRoPSIxOTEiIGhlaWdodD0iMTQxIj48cmVjdCB3aWR0aD0
                    iMTkxIiBoZWlnaHQ9IjE0MSIgZmlsbD0iI2VlZSIvPjx0ZXh0IHRleHQtYW5jaG9yPS
                    JtaWRkbGUiIHg9Ijk1LjUiIHk9IjcwLjUiIHN0eWxlPSJmaWxsOiNhYWE7Zm9udC13Z
                    WlnaHQ6Ym9sZDtmb250LXNpemU6MTJweDtmb250LWZhbWlseTpBcmlhbCxIZWx2ZXRp
                    Y2Esc2Fucy1zZXJpZjtkb21pbmFudC1iYXNlbGluZTpjZW50cmFsIj4xOTF4MTQxPC9
                    0ZXh0Pjwvc3ZnPg=="
                  />
                </div>
              </div>
              <div>
                <b-button type="button" variant="default" class="mt-sm">
                  <label for="fileupload2">
                    Select image
                  </label>
                </b-button>
              </div>
              <span class="help-block">
                Showing a thumbnail instead of the filename when uploading an image.
              </span>
            </b-form-group>
          </b-form>
        </Widget>
      </b-col>
      <b-col lg="6" md={12}>
        <Widget
          title="<h6><strong>Drop</strong> Zone</h6>"
          customHeader settingsInverse refresh close
        >
          <div>
            <vue-dropzone id="dropzone" :options="{ url: '/' }" />
          </div>
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Vue from 'vue';
import vSelect from 'vue-select';
import DatePicker from 'vue2-datepicker';
import { bFormSlider } from 'vue-bootstrap-slider';
import vueDropzone from 'vue2-dropzone';
import { Chrome } from 'vue-color';
import Widget from '@/components/Widget/Widget';

export default {
  name: 'FormElements',
  components: {
    Widget, vSelect, DatePicker, bFormSlider, vueDropzone, Chrome,
  },
  data() {
    return {
      typesDropdown: 'Type one',
      wygContent: '',
      mdContent: '',
      defaultSelect: 'Andromeda Galaxy',
      searchSelect: 'Dallas Cowboys',
      simpleDropdownVariant: 'Option One',
      dangerDropdownVariant: 'Ichi',
      warningDropdownVariant: 'Shi',
      successDropdownVariant: 'Hichi',
      bigDropdownVariant: 'Fourth Item',
      datepickerText: '',
      datetimepickerText: '',
      timeModel: null,
      dateModel: null,
      intPhoneModel: null,
      phoneModel: null,
      inputFiles: [],
      imageFiles: [],
      color: {
        hex: '#cccccc',
      },
      isPickerActive: false,
    };
  },
  methods: {
    changeTypesDropdown(value) {
      Vue.set(this, 'typesDropdown', value);
    },
    changeSelectOption(field, value) {
      Vue.set(this, field, value);
    },
    selectDate(val) {
      Vue.set(this, 'datepickerText', val.toLocaleDateString());
    },
    selectDatetime(val) {
      Vue.set(this, 'datetimepickerText', new Date(Date.parse(val)).toLocaleString());
    },
    onChangeInputFiles(e) {
      const files = [];
      let i = 0;
      for (i; i < e.target.files.length; i += 1) {
        files.push(e.target.files[i]);
      }

      Vue.set(this, 'inputFiles', files);
    },
    onChangeInputImage(e) {
      const files = [];
      const reader = new FileReader();
      files.push(e.target.files[0]);
      reader.onloadend = () => {
        files[0].preview = reader.result;
        files[0].toUpload = true;
        Vue.set(this, 'imageFiles', files);
      };
      reader.readAsDataURL(e.target.files[0]);
    },
    removeFiles() {
      Vue.set(this, 'inputFiles', []);
    },
    changeColor(e) {
      Vue.set(this, 'color', { hex: e.value });
    },
  },
};
</script>

<style src="./Elements.scss" lang="scss" />
