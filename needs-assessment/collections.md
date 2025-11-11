# Needs Assessment Strapi Collections

## Overview of Needs Assessment Collections

The **Needs Assessment** compiles global data on the needs of various groups across countries, regions, and subregions.

This data is modeled in **Strapi** as a set of **collections**, each representing specific aspects of the data.

These collections provide a structured data source that supports efficient querying and filtering in the frontend, allowing users to explore and display needs information by location, category, or other relevant attributes.

## Table of Contents

- Overview of Needs Assessment Collections
- What's in a Collection
- Naming Conventions for the Strapi Collections
- How to create a Collection
- How to rename a Collection
- List of Strapi Collections relating to the Needs Assessment

## What's in a collection

A collection is one of three Strapi content-types, formally known as a collection-type, and contains various fields for the data used to populate that collection. These felds can be added during the creation of a collection or afterward during edits/updates to the collection.

To view a collection:
1. The Strapi Admin panel must be running in your browser.

2. Select the Content Manager icon from the navigation menu in the Strapi Admin panel (see Figure 1). A list of collections to choose from should now appear in a column beside the navigation menu.

3. Select the collection type you wish to view by clicking on the name of the collection (for example, Product.Category)

4. In the browser, you should now see the title of the collection at the top and a table that displays some of the fields for that collection. If the collection has been populated, a list of options available for that collection will also appear in the table.

5. To view all of the fields in that collection, click the view settings toggle that displays over the top right corner of the table (see Figure 2). The fields that are currently displayed in the table will be checked as Displayed Fields. Here, you can choose which fields to view, reset the fields for viewing, or configure the view of fields for display.

Strapi automatically generates and populates the following fields in a collection:

* id
* createdAt
* createdBy
* documentId
* updatedAt
* updatedBy

Other fields (like name) are determined by the data requirements established for each collection.

Some fields in specific collections are automatically populated as a result of the setup implemented during creation. For more details on these specific fields in our Strapi collections, follow the [field-types](./field-types.md) link.