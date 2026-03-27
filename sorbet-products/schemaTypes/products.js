export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    { name: "title", title: "Product Name", type: "string" },

    {
      name: "images",
      title: "Product Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            { name: "alt", type: "string", title: "Alt text" },
            { name: "category", type: "string", title: "Brand" }
          ]
        }
      ]
    }
  ]
}

