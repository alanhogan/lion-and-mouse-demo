# Lion and Mouse Demo

This is a simple demo of a very silly Broccoli filter (built with `broccoli-filter`, `broccoli-funnel`, and `broccoli-merge-trees`).

This uses the `npm` module `broccoli-lion-and-mouse`, an absurd little BroccoliJS filter. Builds result in two subfolders, 'LION' and 'mouse', each containing a full copy of the source directory, but with all `.txt` files converted to ALL UPPERCASE and all lowercase, respectively.

Run me:

```sh
rm -rf dist; broccoli build dist
```

For your convenience, the results of the above command have been committed into this repository and are visible under the `dist/` directory. Compare to the source text under `src/`.

Feedback on the filter itself (alanhogan/broccoli-lion-and-mouse) is welcome.
