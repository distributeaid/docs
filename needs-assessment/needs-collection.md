# Strapi **_NeedsAssessment.Need_** collection

This collection holds a list of the specific needs for each region and subregion that has been documented in the historic needs assessment data.
To populate the collection we need to gather the [ids](./ids.md) for specific fields from other [collections](./collections.md) in Strapi.

➡️ may want to include the frequency for updating this collection (quarterly, yearly, etc) <br>
➡️ may want to include the approach for updating this collection (the current approach versus a future approach)

It currently holds the following [content-field types](./field-types.md):
* **survey**
    - This is a relational field type noted as "Relation with _NeedsAssessment.Survey_" 
    - To populate this field in the needs collection, we need to have the associated Strapi [ID number](./id-number.md) of the specified [survey](./surveys.md) from the [survey collection](./survey-collection.md).
* **region**
     - This is a relational field type noted as "Relation with _Geo.region_" 
    - To populate this field in the needs collection, we need to have the associated Strapi [ID number](./id-number.md) of the specified [region](./regions.md) from the [region collection](./region-collection.md).
* **subregion**
    - This is a relational field type noted as "Relation with _Geo.subregion_" 
    - To populate this field in the needs collection, we need to have the associated Strapi [ID number](./id-number.md) of the specified [subregion](./subregions.md) from the [subregion collection](./subregion-collection).
* **item**
    - This is a relational field type noted as "Relation with _Product.Item_" 
    - To populate this field in the needs collection, we need to have the associated Strapi [ID number](./id-number.md) of the specified [item](./items.md) from the [item collection](./item-collection.md).
* **amount**
    - This is the amount of items requested for the specific need.
    - It comes straight from the json data and does not have an ID from another collection.
    - It is the `need` property in the historic data and was changed to "amount" in the [Need type](./types.md) for the script in order to align with this content-field type in the Strapi need collection.
* **needs_assessment_survey** (need to get clarity on this field as it currently appears as a duplicate of survey)