# Response.Overview Content Guide

## Purpose
The Response.Overview collection holds entries for each response that Distribute Aid is or has been involved with.

## How this content reaches the website
Entries from this collection are used to create response cards on the Response Overview page, as well as individual response pages that provide greater detail relating to that specific project. Only entries that are **published** will display on the website. 

## Before you begin

## Open the collection

## Top-level fields 
| Field name   | Field type              | What to enter                                                                                  | Example                                         | Required? | Where it appears                 |
| ------------ | ----------------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------- | --------- | -------------------------------- |
| name         | Short text              | Enter the name for this response.  | Levant Response                              | Yes       | - **Detailed Response page:** page heading<br> - **Response Overview page:** card heading |
| subheading   | Short text | Enter a brief one sentence description of the response.                  | We source harm reduction kits with ...<details><summary>**Click to expand**</summary>medical equipment that our partners then distribute to trans people who take injection-based gender affirming hormone therapy.</details> | No        | - **Detailed Response page:** below page heading      |
| description  | Rich text               | Enter a detailed description of what we provide for this response.                                           | We deliver supplies to ...<details><summary>**Click to expand**</summary>refugee camps, community centers, and grassroots groups serving people on the move. We also work with a network of organizations across the continent to help them be more sustainable and effective by reducing costs and acquiring new sources of aid.</details>                    | Yes       | - **Detailed response page:** full description in About section<br> - **Response Overview page:** description preview followed by `...` in the card                |
| imageGallery  | Repeatable component               | Add one entry for each image. See the [component](#imagegallery) instructions below.                                           | ———                   | No       | - **Detailed Response page:** all images appear in the About section<br> - **Response Overview page:** the first image entered appears on the response card                |
|<a id="field-process-image-mobile"></a> processImageMobile  | Strapi Media               | Select or upload the image that accurately displays the process the response follows. See [Process image mobile](#process-image-mobile) for the display example and image requirements.                                           | [View example](#process-image-mobile)                     | No       | - **Detailed response page:** How We Work section on mobile layouts                |
| <a id="field-process-image-desktop"></a> processImageDesktop  | Strapi Media               | Select or upload the image that accurately displays the process the response follows. See [Process image desktop](#process-image-desktop) for the display example and image requirements.                                           | [View example](#process-image-desktop)                    | No       | - **Detailed response page:** How We Work section on desktop layouts                |
| callToActionCards  | Repeatable component               | [TODO]                                           | [TODO]                    | No       | **Detailed response page:** How To Get Involved section                |
| faqs  | Repeatable component               | [TODO]                                          | [TODO]                    | No       | **Detailed response page:** FAQ section                |
| slug   | Short text | No input required. This field autofills.                   | [TODO] | No        | No visual display but is used to distinguish each response.      |
| impactStatistics | Single component    | [TODO]                | —                                               | Yes        | **Detailed response page:** By The Numbers section         |
| aboutHeading  | Short text               | Enter "About The" + the project name                                           | About The US Disaster Preparedness Project                    | No       | **Detailed response page:** heading for the About section               |
| details  | Repeatable component               | [TODO]                                           | [TODO]                    | No       | **Detailed response page:** below the images in the About section, if applicable.                |
| processHeading  | Short text               | [TODO]Enter "About The" + the project name                                           | [TODO]                    | No       | **Detailed response page:** heading for the process image.                |
| processFootnote  | Short text               | [TODO]Enter "About The" + the project name                                           | [TODO]                    | No       | **Detailed response page:** footnote for the process image                |
| fundraisers  | Relation               | Choose the fundraiser that is associated with the response. If applicable, choose additional fundraisers that can be associated with the response.                                           | [TODO]                    | No       | No visual display. Used to connect the response to various fundraisers.                |

## Component fields

### imageGallery

**Strapi field name:** `imageGallery`<br>
**Field type:** Repeatable component<br>
**Component:** Image Reference<br>
**Requirement:** Add an entry for <u>each</u> image that will be displayed in this response.<br>
**Note:** The first entry will be used for the **Response Overview** page, as well as the **Detailed Response** page.

This component contains additional fields. Complete each field as follows:

| Subfield   | Field type              | What to enter                                                                                  | Example                                         | Required? | Where it appears                 |
| ------------ | ----------------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------- | --------- | -------------------------------- |
| imageURL         | text              | Enter the Cloudinary URL for this image. See [Copy and enter a Cloudinary URL](#copy-and-enter-a-cloudinary-url).  | [TODO]<br>NEED TO CONFIRM WHAT LINK TO USE FOR EXAMPLE<details><summary>Click to expand</summary></details>                              | Yes       | Image appears in the About section of the response pages.  |
| altText         | text              | Enter the descriptive text that will appear if the image fails to load.  | Stacked boxes filled with aid supplies sitting in a warehouse.           | No       | Anywhere the image fails to load. |
| attributionName         | text              | Enter the name of the organization that provided the image.  | Anera                              | No       | Displays in the bottom corner of the image on the response pages.  |
| attributionURL         | text              | Enter the URL for the organization that provided this image.  | https://anera.org/                              | No       | As a link for the organization on the image in the response pages. |

### impactStatistics

**Strapi field name:** ``<br>
**Field type:** Repeatable component<br>
**Component:** <br>
**Requirement:** Add an entry for <u>each</u> [TODO] that will be displayed in this response.<br>

This component contains additional fields. Complete each field as follows:

| Subfield   | Field type              | What to enter                                                                                  | Example                                         | Required? | Where it appears                 |
| ------------ | ----------------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------- | --------- | -------------------------------- |
| subfield name         | field type              | What to enter  | example                              | Yes/No       | where it appears  |

### statistics

**Strapi field name:** ``<br>
**Field type:** Repeatable component<br>
**Component:** <br>
**Requirement:** Add an entry for <u>each</u> [TODO] that will be displayed in this response.<br>

This component contains additional fields. Complete each field as follows:

| Subfield   | Field type              | What to enter                                                                                  | Example                                         | Required? | Where it appears                 |
| ------------ | ----------------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------- | --------- | -------------------------------- |
| subfield name         | field type              | What to enter  | example                              | Yes/No       | where it appears  |

### cta

**Strapi field name:** ``<br>
**Field type:** Repeatable component<br>
**Component:** <br>
**Requirement:** Add an entry for <u>each</u> [TODO] that will be displayed in this response.<br>

This component contains additional fields. Complete each field as follows:

| Subfield   | Field type              | What to enter                                                                                  | Example                                         | Required? | Where it appears                 |
| ------------ | ----------------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------- | --------- | -------------------------------- |
| subfield name         | field type              | What to enter  | example                              | Yes/No       | where it appears  |

### callToActionCards

**Strapi field name:** `callToActionCards`<br>
**Field type:** Repeatable component<br>
**Component:** Call To Action<br>
**Requirement:** Add an entry for <u>each</u> Call To Action card that will be displayed in this response.<br>

This component contains additional fields. Complete each field as follows:

| Subfield   | Field type              | What to enter                                                                                  | Example                                         | Required? | Where it appears                 |
| ------------ | ----------------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------- | --------- | -------------------------------- |
| subfield name         | field type              | What to enter  | example                              | Yes/No       | where it appears  |
| subfield name         | field type              | What to enter  | example                              | Yes/No       | where it appears  |
| subfield name         | field type              | What to enter  | example                              | Yes/No       | where it appears  |
| subfield name         | field type              | What to enter  | example                              | Yes/No       | where it appears  |
| subfield name         | field type              | What to enter  | example                              | Yes/No       | where it appears  |
| subfield name         | field type              | What to enter  | example                              | Yes/No       | where it appears  |
| subfield name         | field type              | What to enter  | example                              | Yes/No       | where it appears  |
| subfield name         | field type              | What to enter  | example                              | Yes/No       | where it appears  |

### faq

**Strapi field name:** ``<br>
**Field type:** Repeatable component<br>
**Component:** <br>
**Requirement:** Add an entry for <u>each</u> [TODO] that will be displayed in this response.<br>

This component contains additional fields. Complete each field as follows:

| Subfield   | Field type              | What to enter                                                                                  | Example                                         | Required? | Where it appears                 |
| ------------ | ----------------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------- | --------- | -------------------------------- |
| subfield name         | field type              | What to enter  | example                              | Yes/No       | where it appears  |

### details

**Strapi field name:** ``<br>
**Field type:** Repeatable component<br>
**Component:** <br>
**Requirement:** Add an entry for <u>each</u> [TODO] that will be displayed in this response.<br>

This component contains additional fields. Complete each field as follows:

| Subfield   | Field type              | What to enter                                                                                  | Example                                         | Required? | Where it appears                 |
| ------------ | ----------------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------- | --------- | -------------------------------- |
| subfield name         | field type              | What to enter  | example                              | Yes/No       | where it appears  |

## Process Image display examples

### Process image mobile

**Strapi field name:** `processImageMobile` </br>
**Source:** Strapi Media Library </br>
**What to enter:** Upload a new approved image, select an existing Media Library asset, or add the approved Cloudinary image to the Media Library using its URL. </br>
**Requirement:** The process flows <u>vertically</u> in this image. <br>
**Instructions:** [Choose the correct image input method](#image-input-methods)</br>

<details>
<summary>Click to view the image example</summary>

![Example process image on mobile](./assets/process-image-mobile-example.png)
</details>

[↩ Back to the `processImageMobile` field in the table](#field-process-image-mobile)

### Process image desktop

**Strapi field name:** `processImageDesktop` </br>
**Source:** Strapi Media Library </br>
**What to enter:** Upload a new approved image, select an existing Media Library asset, or add the approved Cloudinary image to the Media Library using its URL. </br>
**Requirement:** The process flows <u>horizontally</u> in this image. <br>
**Instructions:** [Choose the correct image input method](#image-input-methods)</br>

<details>
<summary>Click to view the image example</summary>

![Example process image on desktop](./assets/process-image-desktop-example.png)
</details>

[↩ Back to the `processImageDesktop` field in the table](#field-process-image-desktop)

## Image input methods
The correct image input method depends on the field you are completing. Check the table below before entering an image.

| Field  | Required input | Use these instructions |
|---|---|---|
| `processImageMobile` and `processImageDesktop`<br> - new approved image file available | Strapi Media Library asset | [Upload a Media Library asset](#upload-a-new-asset-from-you-computer) |
| `processImageMobile` and `processImageDesktop`<br> - image already exists in Strapi | Strapi Media Library asset | [Select a Media Library asset](#select-an-existing-media-library-asset) |
| `processImageMobile` and `processImageDesktop`<br> - approved image exists only in Cloudinary | Strapi Media Library asset | [Add a Cloudinary image to the Media Library](#add-a-cloudinary-image-to-the-media-library) |
| `imageGallery` | Cloudinary URL | [Copy and enter a Cloudinary URL](#copy-and-enter-a-cloudinary-url) |
| `callToActionCard` image fields | Cloudinary URL | [Copy and enter a Cloudinary URL](#copy-and-enter-a-cloudinary-url) |

### Upload or select a Media Library asset

Use this workflow for fields that require an asset in the Strapi Media Library, including the `processImageMobile` and `processImageDesktop` fields.

#### Upload a new asset from you computer

1. Confirm that you are using the approved image file.
2. In the image field, select the plus icon **(+)**, or drag and drop an image into the field.
3. Select **Add more assets**.
4. Confirm that the **From Computer** tab is highlighted.
5. Choose the image file from your computer.
6. Click **Upload asset to the library**.
7. Wait for the upload to complete.
8. Select **Finish**.
9. Confirm that the image appears in the field.
10. Save the entry.

[↩ Back to Image input methods](#image-input-methods)  
[↩ Back to the top-level fields table](#top-level-fields)

#### Select an existing Media Library asset

Use this option when the correct image has already been uploaded to Strapi.

1. In the image field, select the plus icon **(+)**.
2. Locate and select the approved image from available assets.
3. Click **Finish**.
4. Confirm that the image appears in the field.
5. Save the entry.

[↩ Back to Image input methods](#image-input-methods)  
[↩ Back to the top-level fields table](#top-level-fields)

### Add a Cloudinary image to the Media Library

Use this workflow only when all of the following are true:

 - The field requires a Strapi Media Library asset.
 - The approved image is not already available in the Strapi Media Library.
 - The same approved image already exists in Cloudinary.
 - You have confirmed that the image can be reused.

For example, the process images used for an existing response such as **How We Work** may be reused for a new response if the process is identical and the image has been approved for reuse. In that situation, the existing `processImageMobile` and `processImageDesktop` images can be located in Cloudinary and added to the new Strapi entry as Media Library assets. 

#### Copy the URL from Cloudinary

1. Open the Cloudinary account.
2. For process images, open the `aggregated-public-information` folder, then the `production` folder for access to the images.
3. Select the chosen image.
4. Hover over the image and select (<>) **Copy URL**.

#### Add the image to the Strapi Media Library

5. Return to the relevant image field in Strapi.
6. Select the plus icon **(+)** to add an asset.
7. Select **Add more assets**.
8. Click the **From URL** tab.
9. Paste the Cloudinary URL.
10. Click **Next**.
11. Click **Upload asset to the library**.
12. Wait for the upload to complete.
13. Select **Finish**.
14. Confirm that the image appears in the field.
15. Save the entry. 

> This workflow creates or adds a Media Library asset from the Cloudinary URL. It is different from pasting a Cloudinary URL directly into a URL field.

[↩ Back to Image input methods](#image-input-methods)  
[↩ Back to the top-level fields table](#top-level-fields)

### Copy and enter a Cloudinary URL

Use this workflow for fields that specifically require a Cloudinary URL, such as `imageGallery` and the CTA card image fields in the `callToActionCards`.

#### Copy the URL from Cloudinary

1. Open the Cloudinary account.
2. Navigate to the appropriate folder:
    - **Response images:** open the `responses` folder, then the folder for the specific response to access the available response images.
3. Select the chosen image.
4. Hover over the image and select (<>) **Copy URL**.

#### Enter the URL in Strapi

5. In Strapi, select **+ Add an entry**. 
6. Paste the Cloudinary URL into the image URL field.
7. Confirm that the URL was pasted correctly.
8. Save the entry.

[↩ Back to Image input methods](#image-input-methods)  
[↩ Back to the top-level fields table](#top-level-fields)

## Save and publish

## Before publishing

## Troubleshooting

## Content ownership and maintenance