# Needs Assessment Strapi Collections

## Overview of Needs Assessment Collections

The **Needs Assessment** compiles global data on the needs of various groups across countries, regions, and subregions.

This data is modeled in **Strapi** as a set of **collections**, each representing specific aspects of the data.

These collections provide a structured data source that supports efficient querying and filtering in the frontend, allowing users to explore and display needs information by location, category, or other relevant attributes.

## Table of Contents

- [Overview of Needs Assessment Collections](#overview-of-needs-assessment-collections)
- [What's in a Collection](#whats-in-a-collection)
- [Naming Conventions for the Strapi Collections](#naming-conventions-for-the-strapi-collections)
- How to Create a Collection
- How to rename a Collection
- List of Strapi Collections Related to the Needs Assessment

## What's in a Collection

A **collection** is one of Strapi's three content-types (formally called a _collection type_). It contains fields that define the data structure for that collection. Fields can be added when creating the collection or later during edits and updates.

### Viewing a Collection
To view a collection in Strapi:
1. Ensure the **Strapi Admin Panel** is running in your browser.

2. Select the **Content Manager** icon from the navigation menu (see Figure 1). A list of available collections will appear.

<figure>
  <img src="../images/content-manager.png" alt="Content Manager icon in the Strapi navigation menu that opens Collection Types column" style="max-width: 80%; height: auto;">
  <figcaption><strong>Figure 1.</strong> Strapi Content Manager icon in the navigation menu.</figcaption>
</figure>

3. Click the name of the collection you want to view (for example, `Product.Category`)

4. The main panel should now display the collection title and a table showing several of its fields. If entries exist, they'll appear as rows in the table.

5. To view or customize the displayed fields, select the **View settings** toggle above the top-right corner of the table (see Figure 2). 

<figure>
  <img src="../images/view-settings.png" alt="View settings toggle" style="max-width: 80%; height: auto;">
  <figcaption><strong>Figure 2.</strong> View settings toggle.</figcaption>
</figure>

- In this panel, you can:
    * Choose which fields to display
    * Reset the default view
    * Configure the display order of fields

### Automatically Generated Fields
Strapi automatically creates and populates the following fields in every collection:

* `id`
* `createdAt`
* `createdBy`
* `documentId`
* `updatedAt`
* `updatedBy`

Other fields (such as `name`) are determined by the data requirements specific to each collection and are added manually during collection creation or during updates. 

Some collections also contain auto-populated fields configured during setup. For details about these specific fields, see [our field types documentation](./field-types.md).

For more information on Strapi content-types, including the collection type, and creating content-types manually, see these [Strapi docs](https://docs.strapi.io/cms/features/content-type-builder).

>**NOTE**: All current Strapi collections related to Needs Assessment have been created manually. They were not generated using Strapi's AI features.

## Naming Conventions for the Strapi Collections

Most Strapi collection names follow a **two-level naming structure** that reflects both the core concept (parent/umbrella category) and a specific aspect within that category (subcomponent).

### Structure

`<CoreConcept>.<SpecificAspect>`
* **CoreConcept** - Represents the parent or umbrella category (e.g. `Product`, `Geo`, `NeedsAssessment`).

* **SpecificAspect** - Distinct subcomponent within that category.

#### Examples

| Collection Name   | Core Concept   | Specific Aspect   | Description   |
|--------------------|-----------------|---------------|----------------------------|
|`Product.Category`|Product|Category| List of product categories.|
|`Product.Item`|Product|Item| List of product items.|
|`NeedsAssessment.Survey`|NeedsAssessment|Survey|Surveys for the needs assessment.|
|`NeedsAssessment.Need`|NeedsAssessment|Need|Collected needs from previous assessments.|


### Purpose
This convention ensures clear organization, consistent naming, and easier navigation of collections across the Strapi admin and codebase. It supports scalability as new aspects are added under existing core parent categories.

## How to Create a Collection

Use this process when you need a new collection that follows the `<CoreConcept>.<SpecificAspect>` naming conventions. 

### Before You Start
- Decide whether the collection needs the two-level structure (`CoreConcept.SpecificAspect`) or just `SpecificAspect`.
- Identify the**CoreConcept** and **SpecificAspect** for the new collection.
- Review the [Strapi Content-Type Builder overview](https://docs.strapi.io/cms/features/content-type-builder#overview).

**Note:** Strapi does not support dotted collection names natively. Create the collection in the admin panel using only the **SpecificAspect**, then rename it via CLI to align with the naming conventions if a two-level name is required.

---
### Part 1 - Create the Collection in the Strapi Admin
1. Open the Strapi admin panel and go to **Content-Type Builder**.
2. Select the icon to **Create new collection type**.
3. In **Display name**, enter the **SpecificAspect** (for example, `Category`).
4. In **Advanced Settings**, enable **Draft and Publish**.
5. Click [TODO - ensure the correct label is here] Continue.
6. Add the required fields for the collection and configure their settings.
7. Click Save to update the collection.
---

### Part 2 - Rename the Collection to Use `<CoreConcept>.<SpecificAspect>` (CLI)

Use this procedure when the collection must follow the two-level naming structure and the API ID needs to be aligned.

### Example Scenario 
You want a collection named `Product.Category`. 
Strapi will initially name the API ID `api::category.category` but you want the API ID `api::product.category`.

A real instance from the repo: 

- Strapi initially created `api::survey.survey`. 
- The API ID was adjusted to `api::assessment.survey`. 
- After further refinement, the collection was renamed to _NeedsAssessment.Survey_, and the API ID became `api::needs-assessment.survey`.

Steps
1. Open a terminal at the project root.
2. Run the Strapi generator.

   ```
   yarn strapi generate
   ```

3. When prompted, choose **content-type**:

   ```
   ? Strapi Generators (Use arrow keys)
       api - Generate a basic API 
       controller - Generate a controller for an API 
     ❯ content-type - Generate a content type for an API 
       policy - Generate a policy for an API 
       middleware - Generate a middleware for an API 
       migration - Generate a migration 
       service - Generate a service for an API
   ```

4. Answer the prompts:

   ```
   ? Content type display name Product.Category  # two-level structure
   ? Content type singular name category   # SpecificAspect
   ? Content type plural name categories
   ? Please choose the model type  Collection Type 
   ? Do you want to add attributes? No
   ? Where do you want to add this model? Add model to new API 
   ? Name of the new API? product  # CoreConcept
   ? Bootstrap API related files? Yes
   ```

5. Copy over the attributes in the schema.json file from the original **SpecificAspect**-only API folder (`src/api/categpry/content-types/category`) into the new content-type schema.json file for the **CoreConcept.SpecificAspect** API folder (`src/api/product/content-types/category`).

6. Remove the old collection type to avoid types errors:
   ```
   rm -rf src/api/category
   ```

7. Restart the server to automatically generate the new types for our renamed collection:
   ```
   yarn develop
   ```

8. Check references in the codebase are using the new API ID (`api::product.category`):
   - controllers
   - routes
   - services
   - types/generated

9. Confirm the renamed collection exists in the Strapi admin interface in the **Content-Type Builder** and the **Content Manager**.

10. Enable **Draft and Publish** for the collection. 

    🚨[TODO: add steps for this process here or elsewhere?]

11. Update **permissions** for the api requests.

    🚨[TODO: go through steps for this if needed]

11. Final step to verify collection is working for API endpoint use.
    - Create a new entry in the collection in the **Content Manager** to confirm expected behaviour. 

    🚨[TODO: Address what expected behaviour should look like]
    
    - Create a GET request for the API endpoint in Postman (API test tool) to confirm data is received.

    - Delete entry after verification.
