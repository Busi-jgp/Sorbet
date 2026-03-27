export default {
  name: "post",
  title: "Special Offer",
  type: "document",
  fields: [
    { name: "title", type: "string" },
    { name: "description", type: "text" },
    { name: "price", type: "string" },
    { name: "oldPrice", type: "string" },

    {
      name: "image",
      type: "image",
      options: { hotspot: true }
    },

    { name: "ribbon", type: "string" },
    { name: "ribbonColor", type: "string" },

    {
      name: "meta",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "icon", type: "string" },
            { name: "text", type: "string" }
          ]
        }
      ]
    }
  ]
}