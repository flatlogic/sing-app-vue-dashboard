<template>
  <div class="forms-elements">
    <h1 class="page-title">
      Form - <span class="fw-semi-bold">Inputs &amp; Controls</span>
    </h1>
    <div class="row">
      <div class="col-lg-6 col-md-12">
        <Widget
          title="<h6> Inputs </h6>"
          custom-header
          settings
          refresh
          close
        >
          <div class="mb-3">
            <form>
              <legend><strong>Horizontal</strong> form</legend>
              <div class="row mb-3">
                <label
                  for="normal-field"
                  class="col-md-4 col-form-label text-md-end"
                >Normal field</label>
                <div class="col-md-8">
                  <input
                    id="normal-field"
                    type="text"
                    class="form-control"
                    placeholder="May have placeholder"
                  >
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-4 text-start">
                  <label
                    for="label-hint"
                    class="col-form-label"
                  >
                    Label hint
                    <span class="help-block">Some help text</span>
                  </label>
                </div>
                <div class="col-md-8">
                  <input
                    id="label-hint"
                    type="text"
                    class="form-control"
                  >
                </div>
              </div>
              <div class="row mb-3">
                <label
                  for="tooltip-field"
                  class="col-md-4 col-form-label text-md-end"
                >Tooltip enabled</label>
                <div class="col-md-8">
                  <input
                    id="tooltip-field"
                    type="text"
                    class="form-control"
                    title="Some explanation text here"
                  >
                </div>
              </div>
              <div class="row mb-3">
                <label
                  for="disabled-field"
                  class="col-md-4 col-form-label text-md-end"
                >Disabled input</label>
                <div class="col-md-8">
                  <input
                    id="disabled-field"
                    type="text"
                    class="form-control"
                    disabled
                    value="Default value"
                  >
                </div>
              </div>
              <div class="row mb-3">
                <label
                  for="length-field"
                  class="col-md-4 col-form-label text-md-end"
                >Max length</label>
                <div class="col-md-8">
                  <input
                    id="length-field"
                    type="text"
                    class="form-control"
                    maxlength="3"
                    placeholder="Max length 3 characters"
                  >
                </div>
              </div>
              <div class="row mb-3">
                <label
                  for="prepended-field"
                  class="col-md-4 col-form-label text-md-end"
                >Prepended input</label>
                <div class="col-md-8">
                  <div
                    id="prepended-field"
                    class="input-group"
                  >
                    <span class="input-group-text">
                      <i class="fa fa-user" />
                    </span>
                    <input
                      type="text"
                      class="form-control"
                    >
                  </div>
                </div>
              </div>
              <div class="row mb-3">
                <label
                  for="password-field"
                  class="col-md-4 col-form-label text-md-end"
                >Password</label>
                <div class="col-md-8">
                  <div
                    id="password-field"
                    class="input-group"
                  >
                    <span class="input-group-text">
                      <i class="fa fa-lock" />
                    </span>
                    <input
                      type="password"
                      class="form-control"
                    >
                  </div>
                </div>
              </div>
              <div class="row mb-3">
                <label
                  for="append-field"
                  class="col-md-4 col-form-label text-md-end"
                >Appended input</label>
                <div class="col-md-8">
                  <div
                    id="append-field"
                    class="input-group"
                  >
                    <input
                      type="text"
                      class="form-control"
                    >
                    <span class="input-group-text">.00</span>
                  </div>
                </div>
              </div>
              <div class="row mb-3">
                <label
                  for="combined-field"
                  class="col-md-4 col-form-label text-md-end"
                >Combined input</label>
                <div class="col-md-8">
                  <div
                    id="combined-field"
                    class="input-group"
                  >
                    <span class="input-group-text">$</span>
                    <input
                      type="text"
                      class="form-control"
                    >
                    <span class="input-group-text">.00</span>
                  </div>
                </div>
              </div>
              <div class="row mb-3">
                <label
                  for="transparent-field"
                  class="col-md-4 col-form-label text-md-end"
                >Append Transparent</label>
                <div class="col-md-8">
                  <div
                    id="transparent-field"
                    class="input-group input-group-transparent"
                  >
                    <input
                      type="text"
                      class="form-control"
                    >
                    <button
                      class="btn bg-light"
                      type="button"
                    >
                      <i class="fa fa-camera text-black" />
                    </button>
                  </div>
                </div>
              </div>
              <div class="row mb-3 form-action bg-transparent ps-1">
                <div class="col-md-4" />
                <div class="col-md-8">
                  <button
                    class="btn btn-success text-white me-3"
                    type="submit"
                  >
                    Save Changes
                  </button>
                  <button
                    class="btn btn-inverse"
                    type="button"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Widget>
      </div>
      <div class="col-lg-6 col-md-12">
        <Widget
          title="<h6> Prepended and appended inputs </h6>"
          custom-header
          settings
          refresh
          close
        >
          <div class="mb-3">
            <form>
              <legend><strong>Default</strong> form</legend>
              <div class="mb-3">
                <label
                  for="search-field"
                  class="form-label"
                >Search type input</label>
                <div class="row">
                  <div class="col-md-8">
                    <div class="input-group">
                      <input
                        id="search-field"
                        class="form-control"
                        type="text"
                      >
                      <button
                        class="btn btn-secondary"
                        type="button"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label
                  for="bar-field"
                  class="form-label"
                >Whole bar appended</label>
                <div class="row">
                  <div class="col-md-8">
                    <div class="input-group">
                      <input
                        id="bar-field"
                        class="form-control"
                        type="text"
                      >
                      <button
                        class="btn btn-danger"
                        type="button"
                      >
                        <i class="la la-pencil" />
                      </button>
                      <button
                        class="btn btn-warning"
                        type="button"
                      >
                        <i class="la la-plus" />
                      </button>
                      <button
                        class="btn btn-success"
                        type="button"
                      >
                        <i class="la la-refresh" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label
                  for="actions-field"
                  class="form-label"
                >Actions dropdown</label>
                <div class="row">
                  <div class="col-md-8">
                    <div class="input-group">
                      <input
                        id="actions-field"
                        class="form-control"
                        type="text"
                      >
                      <button
                        class="btn btn-success dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                      >
                        Action
                      </button>
                      <ul class="dropdown-menu dropdown-menu-end">
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                          >Action</a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                          >Another action</a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                          >Something else here</a>
                        </li>
                        <li><hr class="dropdown-divider"></li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                          >Separated link</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label
                  for="segmented-field"
                  class="form-label"
                >Segmented dropdown</label>
                <div class="form-text">
                  Anything can be appended to the right
                </div>
                <div class="row">
                  <div class="col-md-8">
                    <div class="input-group">
                      <input
                        id="segmented-field"
                        class="form-control"
                        type="text"
                      >
                      <button
                        class="btn btn-warning"
                        type="button"
                      >
                        Action
                      </button>
                      <button
                        class="btn btn-warning dropdown-toggle dropdown-toggle-split"
                        type="button"
                        data-bs-toggle="dropdown"
                      />
                      <ul class="dropdown-menu dropdown-menu-end">
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                          >Action</a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                          >Another action</a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                          >Something else here</a>
                        </li>
                        <li><hr class="dropdown-divider"></li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                          >Separated link</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label
                  for="types-field"
                  class="form-label"
                >Types dropdown</label>
                <div class="form-text">
                  You can select some type of a field just right in the place.
                </div>
                <div class="row">
                  <div class="col-md-8">
                    <div class="input-group">
                      <input
                        id="types-field"
                        class="form-control"
                        type="text"
                      >
                      <button
                        class="btn btn-primary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                      >
                        {{ typesDropdown }}
                      </button>
                      <ul class="dropdown-menu dropdown-menu-end">
                        <li>
                          <button
                            class="dropdown-item"
                            @click="typesDropdown = 'Another type'"
                          >
                            Another type
                          </button>
                        </li>
                        <li>
                          <button
                            class="dropdown-item"
                            @click="typesDropdown = 'Type one'"
                          >
                            Type one
                          </button>
                        </li>
                        <li>
                          <button
                            class="dropdown-item"
                            @click="typesDropdown = 'Next type'"
                          >
                            Next type
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label
                  for="transparent-search"
                  class="form-label"
                >Transparent input</label>
                <div class="form-text">
                  With gray-light background. White by default.
                </div>
                <div class="row">
                  <div class="col-md-8">
                    <input
                      id="transparent-search"
                      class="form-control input-no-border bg-gray-lighter"
                      type="text"
                      placeholder="Search Dashboard"
                    >
                  </div>
                </div>
              </div>
              <div class="mb-3 form-action bg-transparent ps-1">
                <button
                  class="btn btn-success me-1"
                  type="submit"
                >
                  Save Changes
                </button>
                <button
                  class="btn btn-secondary"
                  type="button"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </Widget>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8 col-md-12">
        <Widget
          title="<h6> Form <span class='fw-semi-bold'>Options</span></h6>"
          settings-inverse
          refresh
          close
          custom-header
        >
          <form>
            <legend>Control sizing</legend>
            <p class="mb-0">
              Set input heights using parameters like <code>size=&apos;lg&apos;</code> and
              <code>size=&apos;sm&apos;</code>.
              Also works with <code>type=&apos;search&apos;</code> inputs, input groups and
              selects.
            </p>
            <br>
            <div class="mb-3">
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="size=&quot;lg&quot;"
              >
            </div>
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="default input"
              >
            </div>
            <div class="mb-3">
              <input
                type="text"
                class="form-control form-control-sm"
                placeholder="size=&quot;sm&quot;"
              >
            </div>
          </form>
        </Widget>
      </div>
      <div class="col-lg-4 col-md-12">
        <Widget
          title="<h6> Form <span class='fw-semi-bold'>Options</span></h6>"
          settings-inverse
          refresh
          close
          custom-header
        >
          <form>
            <legend> Input Groups</legend>
            <p class="mb-0">
              Different colors &amp; sizes for any elements including input groups. Elements may be
              easily styled with classes like <code>.bg-primary</code> or
              <code>.bg-transparent</code>
            </p>
            <br>
            <div class="mb-3">
              <div class="input-group">
                <span class="input-group-text bg-transparent">
                  <i class="la la-github-alt" />
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="First Name"
                >
              </div>
            </div>
            <div class="mb-3">
              <div class="input-group input-group-lg">
                <span class="input-group-text">
                  <i class="la la-bars" />
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                >
              </div>
            </div>
            <div class="mb-3">
              <div class="input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  placeholder="City"
                >
                <button
                  class="btn bg-danger text-white"
                  type="button"
                >
                  <i class="la la-code-fork" />
                </button>
              </div>
            </div>
          </form>
        </Widget>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-md-12">
        <Widget
          title="<h6>Textareas</h6>"
          custom-header
          settings
          refresh
          close
        >
          <form>
            <legend>Small form</legend>
            <div class="row mb-3">
              <label
                for="default-textarea"
                class="col-md-3 col-form-label text-md-end"
              >Default textarea</label>
              <div class="col-md-9">
                <textarea
                  id="default-textarea"
                  class="form-control"
                  rows="3"
                />
              </div>
            </div>
            <div class="row mb-3">
              <label
                for="autosize-textarea"
                class="col-md-3 col-form-label text-md-end"
              >Auto-growing textarea</label>
              <div class="col-md-9">
                <textarea
                  id="autosize-textarea"
                  class="form-control"
                  placeholder="Try to add few new lines..."
                  rows="3"
                  @input="autoResize"
                />
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-3 text-md-end">
                <label class="col-form-label">
                  Wysiwyg
                  <span class="help-block">With bottom toolbar appended</span>
                </label>
              </div>
              <div class="col-md-9">
                <div class="wysiwyg-wrapper border rounded p-2">
                  <EditorContent
                    :editor="editor"
                    class="wysiwyg-editor"
                  />
                </div>
                <div class="text-md-end mt-sm">
                  <button
                    class="btn btn-success me-2"
                    type="button"
                  >
                    Save
                  </button>
                  <button
                    class="btn btn-secondary"
                    type="button"
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>
            <div class="row mb-3">
              <label
                for="markdown-editor"
                class="col-md-3 col-form-label text-md-end"
              >Markdown Editor</label>
              <div class="col-md-9">
                <MdEditor
                  v-model="mdContent"
                  language="en-US"
                  :preview="false"
                />
                <a
                  class="text-muted d-flex align-items-center mt-sm"
                  href="http://commonmark.org/help/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    aria-hidden="true"
                    class="markdown-help-svg"
                    height="16"
                    version="1.1"
                    viewBox="0 0 16 16"
                    width="16"
                  >
                    <path
                      fill-rule="evenodd"
                      fill="#798892"
                      d="M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z"
                    />
                  </svg>
                  <span class="ms-1">Markdown styling is supported</span>
                </a>
              </div>
            </div>
          </form>
        </Widget>
      </div>
      <div class="col-lg-6 col-md-12">
        <Widget
          title="<h6> Selects </h6>"
          refresh
          close
          settings
          custom-header
        >
          <form class="form-label-left">
            <legend>Default form with labels on left</legend>
            <div class="row mb-3">
              <label
                for="default-select"
                class="col-md-4 col-form-label"
              >Default select</label>
              <div class="col-md-8">
                <div class="row">
                  <div class="col-md-9">
                    <select
                      id="default-select"
                      v-model="defaultSelect"
                      class="form-select"
                    >
                      <option value="Large Magellanic Cloud">
                        Large Magellanic Cloud
                      </option>
                      <option value="Andromeda Galaxy">
                        Andromeda Galaxy
                      </option>
                      <option value="SextansA">
                        SextansA
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mb-3">
              <label
                for="search-select"
                class="col-md-4 col-form-label"
              >Select with search</label>
              <div class="col-md-8">
                <div class="row">
                  <div class="col-md-9">
                    <select
                      id="search-select"
                      v-model="searchSelect"
                      class="form-select"
                    >
                      <option value="Dallas Cowboys">
                        Dallas Cowboys
                      </option>
                      <option value="New York Giants">
                        New York Giants
                      </option>
                      <option value="Philadelphia Eagles">
                        Philadelphia Eagles
                      </option>
                      <option value="Washington Redskins">
                        Washington Redskins
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <form>
            <legend>Dropdown based colored selects</legend>
            <div class="row mb-3">
              <label
                for="simple-select"
                class="col-md-4 col-form-label"
              >Simple select</label>
              <div class="col-md-8">
                <div class="dropdown">
                  <button
                    id="simple-select"
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                  >
                    {{ simpleDropdownVariant }}
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <button
                        class="dropdown-item"
                        @click="simpleDropdownVariant = 'Option One'"
                      >
                        Option One
                      </button>
                    </li>
                    <li>
                      <button
                        class="dropdown-item"
                        @click="simpleDropdownVariant = 'Option Two'"
                      >
                        Option Two
                      </button>
                    </li>
                    <li>
                      <button
                        class="dropdown-item"
                        @click="simpleDropdownVariant = 'Option Three'"
                      >
                        Option Three
                      </button>
                    </li>
                  </ul>
                </div>
                <div class="form-text">
                  Auto size
                </div>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-4">
                <label class="col-form-label">
                  Colored ones <br>
                  <span class="help">A bit of Japanese</span>
                </label>
              </div>
              <div class="col-md-8">
                <div class="dropdown d-inline-block me-2">
                  <button
                    class="btn btn-danger dropdown-toggle text-white"
                    type="button"
                    data-bs-toggle="dropdown"
                  >
                    {{ dangerDropdownVariant }}
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <button
                        class="dropdown-item"
                        @click="dangerDropdownVariant = 'Ichi'"
                      >
                        Ichi
                      </button>
                    </li>
                    <li>
                      <button
                        class="dropdown-item"
                        @click="dangerDropdownVariant = 'Ni'"
                      >
                        Ni
                      </button>
                    </li>
                    <li>
                      <button
                        class="dropdown-item"
                        @click="dangerDropdownVariant = 'San'"
                      >
                        San
                      </button>
                    </li>
                  </ul>
                </div>
                <div class="dropdown d-inline-block me-2">
                  <button
                    class="btn btn-warning dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                  >
                    {{ warningDropdownVariant }}
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <button
                        class="dropdown-item"
                        @click="warningDropdownVariant = 'Shi'"
                      >
                        Shi
                      </button>
                    </li>
                    <li>
                      <button
                        class="dropdown-item"
                        @click="warningDropdownVariant = 'Go'"
                      >
                        Go
                      </button>
                    </li>
                    <li>
                      <button
                        class="dropdown-item"
                        @click="warningDropdownVariant = 'Roku'"
                      >
                        Roku
                      </button>
                    </li>
                  </ul>
                </div>
                <div class="dropdown d-inline-block">
                  <button
                    class="btn btn-success dropdown-toggle text-white"
                    type="button"
                    data-bs-toggle="dropdown"
                  >
                    {{ successDropdownVariant }}
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <button
                        class="dropdown-item"
                        @click="successDropdownVariant = 'Hichi'"
                      >
                        Hichi
                      </button>
                    </li>
                    <li>
                      <button
                        class="dropdown-item"
                        @click="successDropdownVariant = 'Hachi'"
                      >
                        Hachi
                      </button>
                    </li>
                    <li>
                      <button
                        class="dropdown-item"
                        @click="successDropdownVariant = 'Ku'"
                      >
                        Ku
                      </button>
                    </li>
                    <li>
                      <button
                        class="dropdown-item"
                        @click="successDropdownVariant = 'Ju'"
                      >
                        Ju
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-4">
                <label class="col-form-label">
                  Big one <br>
                  <span class="help-block">
                    Size can be controlled with <code>size='lg'</code> &amp; <code>size='sm'</code>
                  </span>
                </label>
              </div>
              <div class="col-md-8">
                <div class="dropdown">
                  <button
                    class="btn btn-secondary btn-lg dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                  >
                    {{ bigDropdownVariant }}
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <button
                        class="dropdown-item"
                        @click="bigDropdownVariant = 'Fourth Item'"
                      >
                        Fourth Item
                      </button>
                    </li>
                    <li>
                      <button
                        class="dropdown-item"
                        @click="bigDropdownVariant = 'Fifth Item'"
                      >
                        Fifth Item
                      </button>
                    </li>
                    <li>
                      <button
                        class="dropdown-item"
                        @click="bigDropdownVariant = 'Sixth Item'"
                      >
                        Sixth Item
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </form>
        </Widget>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <Widget
          title="<h6> Checkbox <strong>Controls</strong></h6>"
          settings-inverse
          refresh
          close
          custom-header
        >
          <div class="row">
            <div class="col-lg-4">
              <form>
                <legend>Basic</legend>
                <p>
                  Supports bootstrap brand colors: <code>.abc-checkbox-primary</code>,
                  <code>.abc-checkbox-info</code>
                  etc.
                  Pure <abbr title="Cascading Style Sheet">css</abbr> solution with no
                  javascript.
                  Let your checkboxes shine!
                </p>
                <div class="mb-3 abc-checkbox">
                  <input
                    id="checkbox-default"
                    type="checkbox"
                  >
                  <label for="checkbox-default">Default</label>
                </div>
                <div class="mb-3 abc-checkbox abc-checkbox-primary">
                  <input
                    id="checkbox-primary"
                    type="checkbox"
                    checked
                  >
                  <label for="checkbox-primary">Primary</label>
                </div>
                <div class="mb-3 abc-checkbox abc-checkbox-success">
                  <input
                    id="checkbox-success"
                    type="checkbox"
                  >
                  <label for="checkbox-success">Success</label>
                </div>
                <div class="mb-3 abc-checkbox abc-checkbox-info">
                  <input
                    id="checkbox-info"
                    type="checkbox"
                    checked
                  >
                  <label for="checkbox-info">Info</label>
                </div>
                <div class="mb-3 abc-checkbox abc-checkbox-warning">
                  <input
                    id="checkbox-warning"
                    type="checkbox"
                    checked
                  >
                  <label for="checkbox-warning">Warning</label>
                </div>
                <div class="mb-3 abc-checkbox abc-checkbox-danger">
                  <input
                    id="checkbox-danger"
                    type="checkbox"
                    checked
                  >
                  <label for="checkbox-danger">Check me out</label>
                </div>
              </form>
            </div>
            <div class="col-lg-4">
              <form>
                <legend>Circled</legend>
                <p>
                  <code>.abc-checkbox-circle</code> for roundness. No more sad controls
                  controls.
                  Check out this brand-new rounded checkboxes!
                </p>
                <div class="mb-3 abc-checkbox abc-checkbox-circle">
                  <input
                    id="checkbox-circle"
                    type="checkbox"
                  >
                  <label for="checkbox-circle">Simple Rounded</label>
                </div>
                <div class="mb-3 abc-checkbox abc-checkbox-info abc-checkbox-circle">
                  <input
                    id="checkbox-circle-info"
                    type="checkbox"
                    checked
                  >
                  <label for="checkbox-circle-info">Me too</label>
                </div>
              </form>
            </div>
            <div class="col-lg-4">
              <form>
                <legend>Disabled</legend>
                <p>
                  Disabled state also supported. Full stack checkbox functionality.
                </p>
                <div class="mb-3 abc-checkbox">
                  <input
                    id="checkbox-disabled"
                    type="checkbox"
                    disabled
                  >
                  <label for="checkbox-disabled">Can't check this</label>
                </div>
                <div class="mb-3 abc-checkbox abc-checkbox-success">
                  <input
                    id="checkbox-disabled-success"
                    type="checkbox"
                    checked
                    disabled
                  >
                  <label for="checkbox-disabled-success">This too</label>
                </div>
                <div class="mb-3 abc-checkbox abc-checkbox-warning">
                  <input
                    id="checkbox-disabled-warning"
                    type="checkbox"
                    checked
                    disabled
                  >
                  <label for="checkbox-disabled-warning">And this</label>
                </div>
              </form>
            </div>
          </div>
          <p class="fs-mini">
            Built with <a
              href="https://github.com/flatlogic/awesome-bootstrap-checkbox"
              rel="noopener noreferrer"
              target="_blank"
            >awesome-bootstrap-checkbox</a>.
          </p>
        </Widget>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <Widget
          title="<h6>Radio <strong>Controls</strong></h6>"
          settings-inverse
          refresh
          close
          custom-header
        >
          <div class="row">
            <div class="col-lg-4">
              <form>
                <legend>Basic</legend>
                <p>
                  Supports bootstrap brand colors: <code>.abc-radio-primary</code>,
                  <code>.abc-radio-danger</code> etc. Pure css solution with no
                  javascript. Let your radios shine!
                </p>
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3 radio abc-radio">
                      <input
                        id="radio-small"
                        type="radio"
                        name="radio1"
                        checked
                      >
                      <label for="radio-small">Small</label>
                    </div>
                    <div class="mb-3 radio abc-radio">
                      <input
                        id="radio-big"
                        type="radio"
                        name="radio1"
                      >
                      <label for="radio-big">Big</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3 radio abc-radio abc-radio-danger">
                      <input
                        id="radio-next"
                        type="radio"
                        name="radio2"
                      >
                      <label for="radio-next">Next</label>
                    </div>
                    <div class="mb-3 radio abc-radio abc-radio-danger">
                      <input
                        id="radio-one"
                        type="radio"
                        name="radio2"
                        checked
                      >
                      <label for="radio-one">One</label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="col-lg-4">
              <form>
                <legend>Disabled</legend>
                <p>
                  Disabled state also supported. Full stack radios functionality.
                </p>
                <div class="mb-3 radio abc-radio">
                  <input
                    id="radio-disabled-next"
                    type="radio"
                    name="radio3"
                    disabled
                  >
                  <label for="radio-disabled-next">Next</label>
                </div>
                <div class="mb-3 radio abc-radio abc-radio-warning">
                  <input
                    id="radio-disabled-one"
                    type="radio"
                    name="radio3"
                    disabled
                    checked
                  >
                  <label for="radio-disabled-one">One</label>
                </div>
              </form>
            </div>
            <div class="col-lg-4">
              <form>
                <legend>Cool iOS-like switches</legend>
                <p>
                  Simple component that helps you turn your default HTML
                  checkbox inputs into beautiful iOS 7 style switches in
                  just few simple steps.
                </p>
                <div class="d-inline-block checkbox-ios me-2 mb-3">
                  <label
                    for="checkbox-ios1"
                    class="switch form-control-label"
                  >
                    <input
                      id="checkbox-ios1"
                      type="checkbox"
                      class="ios form-check-input"
                    >
                    <i />
                  </label>
                </div>
                <div class="d-inline-block checkbox-ios mb-3">
                  <label
                    for="checkbox-ios2"
                    class="switch form-control-label"
                  >
                    <input
                      id="checkbox-ios2"
                      type="checkbox"
                      class="ios form-check-input"
                      checked
                    >
                    <i />
                  </label>
                </div>
              </form>
            </div>
          </div>
        </Widget>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-md-12">
        <Widget
          title="<h6>Pickers</h6>"
          custom-header
          close
          refresh
          settings-inverse
        >
          <form>
            <legend>Date &amp; Time</legend>
            <div class="mb-3">
              <div class="row">
                <div class="col-6">
                  <label
                    for="datepicker"
                    class="form-label pe-1"
                  >Datepicker</label>
                  <VueDatePicker
                    id="datepicker"
                    v-model="datepickerValue"
                    :enable-time-picker="false"
                    auto-apply
                    placeholder="Select date"
                  />
                </div>
                <div class="col-6">
                  <label
                    for="datetimepicker"
                    class="form-label pe-1"
                  >With time</label>
                  <VueDatePicker
                    id="datetimepicker"
                    v-model="datetimepickerValue"
                    auto-apply
                    placeholder="Select date and time"
                  />
                </div>
              </div>
            </div>
          </form>
          <form>
            <legend>Colors</legend>
            <div class="mb-3">
              <label
                for="colorpicker"
                class="form-label"
              >
                Simple select
                <span class="help-block">
                  Color picker widget
                </span>
              </label>
              <div
                class="input-group colorpicker-wrapper"
                style="max-width: 300px;"
              >
                <input
                  type="text"
                  class="form-control"
                  :value="color"
                >
                <input
                  v-model="color"
                  type="color"
                  class="form-control form-control-color"
                >
              </div>
            </div>
          </form>
        </Widget>
      </div>
      <div class="col-lg-6 col-md-12">
        <Widget
          title="<h6> Input <strong>Masks</strong></h6>"
          custom-header
          close
          settings-inverse
          refresh
        >
          <form class="form-label-left">
            <legend>Masked inputs</legend>
            <div class="row mb-3">
              <div class="col-md-4 col-sm-12">
                <label
                  for="phone-mask"
                  class="col-form-label"
                >
                  Phone
                  <span class="help-block">(123) 456-7890</span>
                </label>
              </div>
              <div class="col-md-6 col-sm-12 ps-0">
                <input
                  id="phone-mask"
                  v-model="phoneModel"
                  v-maska
                  class="form-control"
                  type="text"
                  placeholder="(___) ___-____"
                  data-maska="(###) ###-####"
                >
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-4 col-sm-12">
                <label
                  for="int-phone-mask"
                  class="col-form-label"
                >
                  International Phone
                  <span class="help-block">+375 123 456 789</span>
                </label>
              </div>
              <div class="col-md-6 col-sm-12 ps-0">
                <input
                  id="int-phone-mask"
                  v-model="intPhoneModel"
                  v-maska
                  class="form-control"
                  type="text"
                  placeholder="+___ ___ ___ ___"
                  data-maska="+### ### ### ###"
                >
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-4 col-sm-12">
                <label
                  for="date-mask"
                  class="col-form-label"
                >
                  Date Format
                  <span class="help-block">07-03-2013</span>
                </label>
              </div>
              <div class="col-md-6 col-sm-12 ps-0">
                <input
                  id="date-mask"
                  v-model="dateModel"
                  v-maska
                  class="form-control"
                  type="text"
                  placeholder="__-__-____"
                  data-maska="##-##-####"
                >
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-4 col-sm-12">
                <label
                  for="time-mask"
                  class="col-form-label"
                >
                  Time
                  <span class="help-block">13:43</span>
                </label>
              </div>
              <div class="col-md-6 col-sm-12 ps-0">
                <input
                  id="time-mask"
                  v-model="timeModel"
                  v-maska
                  class="form-control"
                  type="text"
                  placeholder="__:__"
                  data-maska="##:##"
                >
              </div>
            </div>
          </form>
        </Widget>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <Widget
          title="<h6>Sliders</h6>"
          custom-header
          settings-inverse
          close
          refresh
        >
          <div class="row">
            <div class="col-lg-4">
              <h4>Color Options</h4>
              <p>Sing extends Bootstrap Slider and provides different color options:</p>
              <form>
                <div class="mb-3">
                  <input
                    type="range"
                    class="form-range"
                    :value="70"
                    min="0"
                    max="100"
                  >
                </div>
                <div class="mb-3 slider-danger">
                  <input
                    type="range"
                    class="form-range"
                    :value="90"
                    min="0"
                    max="100"
                  >
                </div>
                <div class="mb-3 slider-warning">
                  <input
                    type="range"
                    class="form-range"
                    :value="35"
                    min="0"
                    max="100"
                  >
                </div>
                <div class="mb-3 slider-success">
                  <input
                    type="range"
                    class="form-range"
                    :value="55"
                    min="0"
                    max="100"
                  >
                </div>
                <div class="mb-3 slider-inverse">
                  <input
                    type="range"
                    class="form-range"
                    :value="20"
                    min="0"
                    max="100"
                  >
                </div>
              </form>
            </div>
            <div class="col-lg-4">
              <h4>Slider Orientation</h4>
              <p>
                Vertical orientation is also possible using CSS transforms.
              </p>
              <div class="row">
                <div class="col-md-8">
                  <div class="d-flex gap-4">
                    <input
                      type="range"
                      class="form-range form-range-vertical"
                      orient="vertical"
                      :value="70"
                      min="0"
                      max="100"
                    >
                    <input
                      type="range"
                      class="form-range form-range-vertical"
                      orient="vertical"
                      :value="90"
                      min="0"
                      max="100"
                    >
                    <input
                      type="range"
                      class="form-range form-range-vertical"
                      orient="vertical"
                      :value="35"
                      min="0"
                      max="100"
                    >
                    <input
                      type="range"
                      class="form-range form-range-vertical"
                      orient="vertical"
                      :value="55"
                      min="0"
                      max="100"
                    >
                    <input
                      type="range"
                      class="form-range form-range-vertical"
                      orient="vertical"
                      :value="20"
                      min="0"
                      max="100"
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <h4>Range Selector</h4>
              <p>
                Range selector, options specified via <strong>value</strong>
                attribute as
                an array. Price range selector:
              </p>
              <div class="slider-danger">
                <div class="d-flex align-items-center gap-2">
                  <input
                    v-model.number="rangeMin"
                    type="number"
                    class="form-control form-control-sm"
                    style="width: 80px;"
                  >
                  <input
                    v-model.number="rangeMax"
                    type="range"
                    class="form-range flex-grow-1"
                    min="0"
                    max="2000"
                  >
                  <input
                    v-model.number="rangeMax"
                    type="number"
                    class="form-control form-control-sm"
                    style="width: 80px;"
                  >
                </div>
              </div>
            </div>
          </div>
        </Widget>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-md-12">
        <Widget
          title="<h6>Simple <strong>file uploads</strong></h6>"
          custom-header
          settings-inverse
          close
          refresh
        >
          <form>
            <blockquote class="blockquote blockquote-reverse">
              <p>
                The man who is really serious, with the urge to find out what truth is, has no
                style at all. He lives only in what is.
              </p>
              <footer>Bruce Lee</footer>
            </blockquote>

            <div class="row mb-3">
              <label
                for="fileupload1"
                class="col-md-4 col-form-label text-md-end"
              >File input widget</label>
              <div class="col-md-8">
                <div class="input-group fileinput fileinput-new">
                  <input
                    id="fileupload1"
                    type="file"
                    name="file"
                    class="d-none"
                    @change="onChangeInputFiles"
                  >
                  <label
                    for="fileupload1"
                    class="form-control"
                  >
                    <span v-if="inputFiles.length > 0">
                      <span
                        v-for="file in inputFiles"
                        :key="file.name"
                      >
                        {{ file.name }}
                      </span>
                    </span>
                    <span v-else />
                  </label>
                  <button
                    v-if="inputFiles.length === 0"
                    type="button"
                    class="btn btn-secondary btn-file"
                  >
                    <label
                      for="fileupload1"
                      class="mb-0"
                    >Select file</label>
                  </button>
                  <template v-else>
                    <button
                      type="button"
                      class="btn btn-secondary"
                    >
                      <label
                        for="fileupload1"
                        class="mb-0"
                      >Change file</label>
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary"
                      @click="removeFiles"
                    >
                      Remove file
                    </button>
                  </template>
                </div>
                <span class="help-block">
                  Awesome file input plugin allows you to create a visually appealing
                  file or image inputs.
                </span>
              </div>
            </div>
            <div class="row mb-3">
              <label
                for="fileupload2"
                class="col-md-4 col-form-label text-md-end"
              >Image upload widget</label>
              <div class="col-md-8">
                <input
                  id="fileupload2"
                  accept="image/*"
                  type="file"
                  name="file"
                  class="d-none"
                  @change="onChangeInputImage"
                >
                <div class="fileinput fileinput-new fileinput-fix">
                  <div class="fileinput-new thumbnail">
                    <div v-if="imageFiles.length > 0">
                      <div
                        v-for="image in imageFiles"
                        :key="image.name"
                        class="image-preview"
                        :style="{ backgroundImage: `url(${image.preview})`}"
                      />
                    </div>
                    <img
                      v-else
                      alt="picture"
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOTEiIGhlaWdodD0iMTQxIj48cmVjdCB3aWR0aD0iMTkxIiBoZWlnaHQ9IjE0MSIgZmlsbD0iI2VlZSIvPjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9Ijk1LjUiIHk9IjcwLjUiIHN0eWxlPSJmaWxsOiNhYWE7Zm9udC13ZWlnaHQ6Ym9sZDtmb250LXNpemU6MTJweDtmb250LWZhbWlseTpBcmlhbCxIZWx2ZXRpY2Esc2Fucy1zZXJpZjtkb21pbmFudC1iYXNlbGluZTpjZW50cmFsIj4xOTF4MTQxPC90ZXh0Pjwvc3ZnPg=="
                    >
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    class="btn btn-inverse mt-sm"
                  >
                    <label
                      for="fileupload2"
                      class="mb-0"
                    >
                      Select image
                    </label>
                  </button>
                </div>
                <span class="help-block">
                  Showing a thumbnail instead of the filename when uploading an image.
                </span>
              </div>
            </div>
          </form>
        </Widget>
      </div>
      <div class="col-lg-6 col-md-12">
        <Widget
          title="<h6><strong>Drop</strong> Zone</h6>"
          custom-header
          settings-inverse
          refresh
          close
        >
          <div
            class="dropzone"
            :class="{ 'dropzone-active': isDragOver }"
            @dragover.prevent="isDragOver = true"
            @dragleave.prevent="isDragOver = false"
            @drop.prevent="handleDrop"
          >
            <div class="dropzone-content text-center p-5">
              <i class="fa fa-cloud-upload fa-3x text-muted mb-3" />
              <p class="mb-2">
                Drop files here or click to upload
              </p>
              <input
                id="dropzone-input"
                type="file"
                multiple
                class="d-none"
                @change="handleDropzoneFiles"
              >
              <label
                for="dropzone-input"
                class="btn btn-primary"
              >Select Files</label>
              <div
                v-if="droppedFiles.length > 0"
                class="mt-3"
              >
                <div
                  v-for="file in droppedFiles"
                  :key="file.name"
                  class="badge bg-secondary me-1"
                >
                  {{ file.name }}
                </div>
              </div>
            </div>
          </div>
        </Widget>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onUnmounted } from 'vue'
import Widget from '@/components/Widget/Widget.vue'
import { VueDatePicker } from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { MdEditor } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import { vMaska } from 'maska/vue'

const typesDropdown = ref('Type one')
const defaultSelect = ref('Andromeda Galaxy')
const searchSelect = ref('Dallas Cowboys')
const simpleDropdownVariant = ref('Option One')
const dangerDropdownVariant = ref('Ichi')
const warningDropdownVariant = ref('Shi')
const successDropdownVariant = ref('Hichi')
const bigDropdownVariant = ref('Fourth Item')

const datepickerValue = ref(null)
const datetimepickerValue = ref(null)
const timeModel = ref(null)
const dateModel = ref(null)
const intPhoneModel = ref(null)
const phoneModel = ref(null)
const inputFiles = ref([])
const imageFiles = ref([])
const color = ref('#cccccc')

const mdContent = ref('')

const rangeMin = ref(200)
const rangeMax = ref(1547)

const isDragOver = ref(false)
const droppedFiles = ref([])

const editor = useEditor({
  content: '',
  extensions: [StarterKit]
})

function autoResize(event) {
  const textarea = event.target
  textarea.style.height = 'auto'
  textarea.style.height = textarea.scrollHeight + 'px'
}

function onChangeInputFiles(e) {
  const files = []
  for (let i = 0; i < e.target.files.length; i++) {
    files.push(e.target.files[i])
  }
  inputFiles.value = files
}

function onChangeInputImage(e) {
  const files = []
  const reader = new FileReader()
  files.push(e.target.files[0])
  reader.onloadend = () => {
    files[0].preview = reader.result
    files[0].toUpload = true
    imageFiles.value = files
  }
  reader.readAsDataURL(e.target.files[0])
}

function removeFiles() {
  inputFiles.value = []
}

function handleDrop(e) {
  isDragOver.value = false
  const files = Array.from(e.dataTransfer.files)
  droppedFiles.value = [...droppedFiles.value, ...files]
}

function handleDropzoneFiles(e) {
  const files = Array.from(e.target.files)
  droppedFiles.value = [...droppedFiles.value, ...files]
}

onUnmounted(() => {
  if (editor.value) {
    editor.value.destroy()
  }
})
</script>

<style src="./Elements.scss" lang="scss" />
