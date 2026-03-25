---
title: Needs Collection
description: Documentation for the NeedsAssessment.Need Strapi collection.
---

This collection holds a list of the specific needs for each region and subregion that has been documented in the historic needs assessment data. To populate the collection we need to gather the [ids](/needs-assessment/ids/) for specific fields from other [collections](/needs-assessment/collections/) in Strapi.

It currently holds the following content-field types:

* **survey**
    - This is a relational field type noted as "Relation with _NeedsAssessment.Survey_"
    - To populate this field in the needs collection, we need to have the associated Strapi [ID number](/needs-assessment/id-number/) of the specified survey from the [survey collection](/needs-assessment/survey-collection/).
* **region**
    - This is a relational field type noted as "Relation with _Geo.region_"
    - To populate this field in the needs collection, we need to have the associated Strapi [ID number](/needs-assessment/id-number/) of the specified region from the [region collection](/needs-assessment/region-collection/).
* **subregion**
    - This is a relational field type noted as "Relation with _Geo.subregion_"
    - To populate this field in the needs collection, we need to have the associated Strapi [ID number](/needs-assessment/id-number/) of the specified subregion from the [subregion collection](/needs-assessment/subregion-collection/).
* **item**
    - This is a relational field type noted as "Relation with _Product.Item_"
    - To populate this field in the needs collection, we need to have the associated Strapi [ID number](/needs-assessment/id-number/) of the specified item from the [item collection](/needs-assessment/item-collection/).
* **amount**
    - This is the amount of items requested for the specific need.
    - It comes straight from the json data and does not have an ID from another collection.
    - It is the `need` property in the historic data and was changed to "amount" in the [Need type](/needs-assessment/types/) for the script in order to align with this content-field type in the Strapi need collection.
* **needs_assessment_survey** (need to get clarity on this field as it currently appears as a duplicate of survey)
