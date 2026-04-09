---
title: Field Types
description: Notes on specific Strapi content-type fields used in the needs assessment.
---

Information regarding specific content-type fields used in Strapi relating to the needs assessment.

Specifically looking at:

- Fields that are automatically populated from other fields. Examples:
  - the `yearQuarter` field in the _NeedsAssessment.Survey_
  - certain fields in the `volume` and `weight` components of the _Product.Item_ collection (this may not relate to needs-assessment so much)

- Fields that are titled differently in the Strapi collection versus the historic data. Examples:
  - **need** from the historic data is **amount** in the _NeedsAssessment.Need_ collection
  - **survey id** from the historic data is **reference** in the _NeedsAssessment.Survey_ collection

- Fields that exist as a relation to another content-type (that must be a [collection](/needs-assessment/collections/) type). For example:
  - the **item** for a specific need in the _NeedsAssessment.Need_ collection will exist in the _Product.Item_ collection and, therefore, this particular field becomes a "Relation with _Product.Item_".

  It is these relational fields that will need the accompanying [id number](/needs-assessment/id-number/) from the other noted collection in the data transfer.
