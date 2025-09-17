# Strapi content-type fields of note in the needs assessment
Information regarding specific content-type fields used in Strapi relating to the needs assessment could go here.

Specifically looking at:

- fields that are automatically populated from other fields. Examples:
    * the `yearQuarter` field in the _NeedsAssessment.Survey_
    * certain fields in the `volume` and `weight` components of the _Product.Item_ collection (this may not relate to needs-assessment so much)

- fields that are titled differently in the Strapi collection versus the historic data. Examples:
    * **need** from the historic data is **amount** in the _NeedsAssessment.Need_ collection
    * **survey id** from the historic data is **reference** in the _NeedsAssessment.Survey_ collection

- fields that exist as a relation to another content-type (that must be a [collection](./collections.md) type). For example:
    * the **item** for a specifc need in the _NeedsAssessment.Need_ collection will exist in the _Product.Item_ collection and, therefore, this particular field becomes a "Relation with _Product.Item_". 
    
    It is these relational fields that will need the accompanying [id number](./id-number.md) from the other noted collection in the data transfer.

    May want to include how to populate a relation field-type in an API call.

