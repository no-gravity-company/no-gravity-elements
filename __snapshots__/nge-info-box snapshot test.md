# `nge-info-box snapshot test`

#### `WHEN rendered with label: FOO THEN it should match the snapshot`

```html
<div>
  <span>
    HEY
  </span>
  <span>
    HO
  </span>
  <span>
    FOO
  </span>
  <input type="text">
  <span>
  </span>
  <button>
  </button>
</div>

```

#### `WHEN rendered with label: BAR THEN it should match the snapshot`

```html
<div>
  <span>
    HEY
  </span>
  <span>
    HO
  </span>
  <span>
    BAR
  </span>
  <input type="text">
  <span>
  </span>
  <button>
  </button>
</div>

```

#### `renders the component with the correct label`

```html
<div>
  <span>
    HEY
  </span>
  <span>
    HO
  </span>
  <span>
    BAR
  </span>
</div>
```

