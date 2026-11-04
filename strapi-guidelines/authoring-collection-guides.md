# Authoring Strapi Collection User Guides

## Purpose of this authoring guide

Use this guide with `collection-template.md` to create administrator-facing instructions for a specific Strapi collection.

The template provides the structure to copy. This authoring guide explains how to complete each section, decide which optional sections to keep, and prepare the completed guide for review.

The completed collection guide should help administrators create, edit, save, complete, and publish entries without needing to understand the collection's implementation.

### Keep contributor and administrator instructions separate

- Keep instructions about writing and maintaining collection guides in this authoring guide.
- Write the completed collection guide for administrators that are using the Strapi Admin UI. Include what they need to enter, how to complete the task, and where content appears on the website.
- Use temporary author comments for reminders or unresolved questions while drafting.
- Before publishing the completed guide, resolve outstanding questions and remove author comments and placeholders.

## Before you start

### Gather the information you need

Before writing a collection guide, confirm:
- The collection name and field labels shown in the Strapi Content Manager.
- The field types, required settings, validation rules, and component structure.
- Where the content appears on the website.
- How saving, approval, publishing, and website updates work.
- Who can answer content and technical questions about the collection.

Use the administrator interface and collection configuration in production, frontend implementation, and project maintainers to verify this information.

Use an approved test environment (staging) when checking actions that could change or publish content. Do not create test content in production.

Record unresolved questions while drafting. Do not present assumptions as confirmed instructions.

### Create the collection guide

1. Copy `collection-template.md`. Do not overwrite the template.
2. Name the copy after the collection, using lowercase words separated by hyphens. For example, `response-overview.md` for the Response.Overview collection.
3. Save the file in the documentation working location: currently `strapi-guidelines/` at the repository root.
4. Replace the collection name and other placeholders to match the collection.
5. Keep the applicable sections.
6. Remove sections that do not help administrators use this collection.
7. Clearly mark unsresolved questions and resolve them before the guide is published.

Use existing collection guides as references for structure and style. 
Verify that their field requirements, image rules, and publishing behaviour also apply to the new collection before reusing those instructions.

### Apply writing and formatting conventions

Write for administrators completing tasks in Strapi.

- Use the field labels, buttons, and menu names shown in the interface.
- Use direct instructions such as "Enter," "Select," "Upload," and "Review."
- Use numbered lists for steps that must be followed in order.
- Use bullet lists for information that does not require a sequence.
- Distinguish required actions from recommendations.
- Explain unfamiliar terms when administrators need to understand them.
- Use realistic examples without sensitive or personal information.
- Use consistent names for website pages and sections.
- Keep technical implementation details out of the guide unless they help administrators complete a task.

Use consistent formatting throughout the collection guides:

- Use plain text for field labels in tables.
- Use bold for buttons, menus, and other interface controls in instructions, such as **Save** and **Publish**.
- Use code formatting for technical identifiers and filenames, such as `processImageMobile` and `response-overview.md`.
- Use descriptive link text that identifies the destination.
- Reference guide images using relative paths and include meaningful alt text.
- Separate paragraphs with blank lines. When explicit HTML line break is needed, use `<br />` consistently.

## Complete the collection guide

Complete the following sections in the order provided by the template. Adapt the wording to the collection rather than retaining generic instructions that do not apply.

### Guide title

Replace `[Collection Name]` with the name administrators recognize from the Strapi UI for the collection.

If the guide title differs from the collection label in Strapi, identify the exact Strapi label in the introductory instructions.

### Purpose

Explain:

- What content the collection manages.
- When administrators should use it.
- What one entry represents.

Keep this section brief and focused on the administrator's task. Do not describe backend implementation unless it is necessary to understand how to use the collection.

Example:

> Use this collection to create or update information for a response. Each entry provides content displayed on the response overview and detailed response pages.

Replace this example with an explanation specific to the collection.

### How this content reaches the website

Explain the relationship between the Strapi entry and the website.

Identify:

- Where administrators enter the content.
- Which website pages or sections use it.
- What must happen before the content becomes publicly visible.
- Whether an additional update process or delay applies.

Use plain language. Administrators should not need to understand API requests, frontend code, or deployment configuration.

Do not assume that publication updates the website immediately. Confirm the actual behaviour and document any additional step that administrators must take. 

### Before you begin

List what administrators need before starting, such as:

- Access to the approved Strapi environment.
- Permission to create or edit the relevant entries.
- Available source information.
- Approved images, documents, or links.
- Collection-specific preparation.

Distinguish what is needed to begin an entry from what is needed to publish it.

If administrators can save incomplete entries, explain that they can start with the information available and return later. Do not imply that all content must be ready before they can begin.

Include approval requirements here only when they affect preparation. Explain the final approval check in the Before publishing section.

### Open the collection

Provide the steps administrators need to locate the collection and open an entry.

Include:

1. How to access the approved Strapi environment.
2. How to open Content Manager.
3. The exact collection label to select.
4. How to create a new entry.
5. How to find and open an existing entry.

Separate creating and editing into short subsections if the actions differ enough to require separate insructions.

When entries have similar names, explain how to identify the correct one before making changes.

### Save your progress

Explain saving as a separate action from publishing.

The instructions should tell administrators:

- How to save the entry.
- How to confirm that saving succeeded.
- How to return to the entry later.
- Whether incomplete required fields can remain when saving.
- That saving successfully does not necessarily mean the entry is ready to publish.

For the current collections, administrators can save incomplete entries and return later. Required-field warnings occur when attempting to publish rather than when saving. Confirm that this behaviour applies to the collection, including any custom validation, before keeping these statements.

Verify what happens when administrators save changes to an entry that is already published. Explain whether the existing public content remains visible and when the saved changes become public.

Do not assume every saved entry displays the same status label. Use the labels shown in the collection's Strapi interface.

> In Strapi v5, newly created entries generally save as **Draft**, whereas updated entries save as **Modified**.

Keep the publishing checklist out of the saving procedure. Administrators should not need to complete publication checks just to preserve unfinished work.

### Top-level fields

Document the fields directly within the collection entry.

Include a component (if applicable) as one row in this table, then link to its detailed instructions in Component fields. Do not place every nested subfield in the top-level table.

Complete each column as follows:

| Column | What to include |
| --- | --- |
| Field name | The exact field label administrators see in Strapi. |
| Field type | A consistent, understandable description of the input type. |
| What to enter | The action to take, the expected content, and relevant rules. |
| Example | A realistic input or a link to a longer example. |
| Required? | Yes, No, or the condition under which the field is required. |
| Where it appears | The website page and visible element, or an explanation that the field is not publicly displayed. |

### Component fields
### Visual examples
### Before publishing
### Publish and check the website
### Troubleshooting
### Content ownership and maintenance

## Final review and submission

### Review the content
### Test navigation and rendering
### Run repository checks
### Request review

## Maintainence of the complete guide