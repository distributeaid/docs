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
| imageGallery  | Repeatable component               | Add one entry for each image. See the component instructions below. [TODO - add link to this component]                                           | ———                   | No       | - **Detailed Response page:** All images appear in the About section<br> - **Response Overview page:** The first image entered appears on the response card                |
| processImageMobile  | Strapi Media               | Select the image that accurately conveys the process the project follows. The process in the image should flow vertically.                                           | [TODO]Figure out how to get an image in the table so it's hidden until clicked                     | No       | Process section of the detailed response page on **smaller** screens.                |
| processImageDesktop  | Strapi Media               | Select the image that accurately conveys the process the project follows. The process in the image should flow horizontally.                                           | [TODO]Figure out how to get an image in the table so it's hidden until clicked                    | No       | Process section of the detailed response page on **larger** screens.                |
| callToActionCards  | Repeatable component               | [TODO]                                           | [TODO]                    | No       | Cards that appear in the section on how to get involved on the detailed response page.                |
| faqs  | Repeatable component               | [TODO]                                          | [TODO]                    | No       | In the FAQ section of the detailed response page.                |
| slug   | Short text | No input required. This field autofills.                   | [TODO] | No        | [TODO]      |
| impactStatistics | Single component    | [TODO]                | —                                               | Yes        | Impact statistics section on the detailed response page.         |
| aboutHeading  | Short text               | Enter "About The" + the project name                                           | About The US Disaster Preparedness Project                    | No       | Heading for the About section of the response page.                |
| details  | Repeatable component               | [TODO]                                           | [TODO]                    | No       | Below the images in the About section, if applicable.                |
| processHeading  | Short text               | [TODO]Enter "About The" + the project name                                           | [TODO]                    | No       | Heading for the process image on the detailed response page.                |
| processFootnote  | Short text               | [TODO]Enter "About The" + the project name                                           | [TODO]                    | No       | Footnote for the process image on the detailed response page.                |
| fundraisers  | Relation               | Choose the fundraiser that is associated with the response. If applicable, choose additional fundraisers that can be associated with the response.                                           | [TODO]                    | No       | [TODO]                |

## Component fields

### impactStatistics

### statistics

### cta

## Save and publish

## Before publishing

## Troubleshooting

## Content ownership and maintenance