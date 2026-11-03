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

### Guide title
### Purpose
### How this content reaches the website
### Before you begin
### Open the collection
### Save your progress
### Top-level fields
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