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
7. Clearly mark unresolved questions and resolve them before the guide is published.

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

Separate creating and editing into short subsections if the actions differ enough to require separate instructions.

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

| Column           | What to include                                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------------- |
| Field name       | The exact field label administrators see in Strapi.                                               |
| Field type       | A consistent, understandable description of the input type.                                       |
| What to enter    | The action to take, the expected content, and relevant rules.                                     |
| Example          | A realistic input or a link to a longer example.                                                  |
| Required?        | Yes, No, or the condition under which the field is required.                                      |
| Where it appears | The website page and visible element, or an explanation that the field is not publicly displayed. |

In the Field type column, replace `[FIELD TYPE]` with the type of input the field accepts, such as Short text, Rich text, Strapi Media, or Repeatable component. Confirm the type against the collection's configuration.

Explain what "Required?" means in the completed guide. Distinguish requirements enforced by Strapi from editorial recommendations. For example, a field may be optional in Strapi but recommended for a particular page. State that recommendation in the What to enter column rather than presenting it as a required field.

#### Describe multiple website locations

When one field appears in more than one location, list each page and its use separately.

Example:

- Detailed Response page: full description in About section.
- Response Overview page: description preview followed by `...` in the card.

Use consistent page names throughout the guide.

#### Handle long examples

Keep table cells concise. Use one of the following approaches when an example needs more space:

- For images or screenshots, link to an expandable example outside the table.
- For long text, use `<details` and `<summary>` within the Example cell when the documentation renderer supports it.
- If the expanded content makes the table difficult to read, place the example outside the table and link to it instead.

Check that links and expandable examples work in the final documentation renderer.

#### Images and screenshots

In the completed collection guide, link directly to the relevant example subsection.

The following is an illustrative example, not a working link in this authoring guide:

```md
| Column        | suggested content                                                                                                                           |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| What to enter | Upload the approved mobile process image. See [Process image mobile](#process-image-mobile) for the display example and image requirements. |
| Example       | [View example](#process-image-mobile)                                                                                                       |
```

When adapting this example:

1. Create the relevant example subsection in the collection guide.
2. Replace the example wording with collection-specific instructions.
3. Replace the link destination with the subsection's verified anchor.
4. Test the link in the rendered collection guide.

#### Long text

Use descriptive summary label and include the complete example inside the expandable section.

Example Markdown:

```md
| Field name  | Example                                                                                                                                                                                                                                                                                                                                                |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Description | <details><summary>**View full description example**</summary>We deliver supplies to refugee camps, community centers, and grassroots groups serving people on the move. We also work with a network of organizations across the continent to help them be more sustainable and effective by reducing costs and acquiring new sources of aid.</details> |
```

If a visible preview is useful, place a short opening sentence before the expandable section. Keep complete example inside it so administrators can read the full text in one place.

Keep the table row on one source line. For examples requiring several paragraphs, lists, or complex formatting, place the example outside the table and link to it.

Verify the expandable content in the collection guide's final documentation renderer.

### Component fields

Keep this section when a component needs more explanation than the top-level table provides. Remove it when no component guidance is needed.

Duplicate the template subsection for each component that needs detailed instructions.

For each component:

- Use a heading administrators can match to the field in Strapi.
- Identify the exact field name where useful.
- State whether it is a single or repeatable component.
- Explain what one component entry represents.
- Describe any verified minimum, maximum, ordering, or conditional rules.
- Document its subfields in a table.
- Add a return link to the relevant parent field.

Explain repeatable components in terms of the content administrators are adding.

For example:

> Add one entry for each approved statistic. Arrange the entries in the order they should appear on the website.

Confirm the rule before documenting it by manually testing to verify the outcome.

Include a technical component name only if it helps administrators identify the correct component.

#### Nested components

Use a separate subsection when a component contains another component that needs explanation.

Make the relationship clear through headings and introductory text. Do not rely only on technical identifiers to explain the hierarchy.

Document each nested component close to its parent when administrators need both sets of instructions to complete the same task.

### Visual examples

This section is optional. Keep it only when an image or screenshot helps administrators understand a field or its website display.

Use an example image when administrators need to understand what kind of image to provide.

Use a website screenshot when administrators need to understand where or how entered content appears.

A screenshot may illustrate text fields, components, image fields, or several fields together to clarify the data required.

#### Complete each visual example

For each example:

1. Add a descriptive subsection heading.
2. Identify the related Strapi field or fields.
3. Explain what the example shows.
4. Tell administrators what they should notice.
5. Add the image using the agreed asset location and a relative path.
6. Write meaningful alt text.
7. Give the expandable example a descriptive label.
8. Add a return link to the relevant field, component, or table.

Use labels such as:

- View an example mobile process image.
- View the Response Overview card.
- View the image selection screen.

Do not rely on the image alone to communicate requirements or actions. Keep essential instructions in the text.

#### Example images for image input fields

Include applicable field-specific information when administrators need it to select the correct image:

- What the image should show.
- The required final input: a Strapi Media asset or an image URL.
- The approved source, when relevant.
- Verified orientation, dimensions, file type, or other requirements.
- Conditions for reusing an existing image.
- A link to the applicable image input procedure.

Distinguish a requirement from a description of the example.

Do not copy process-image or Cloudinary instructions from another collection unless they apply.

#### Website screenshots

Identify the website page or section shown and explain which fields the screenshot illustrates.

Show enough context to help administrators recognize the location, but avoid unrelated content.

Remove sensitive information and use approved example content.

If the screenshot illustrates several fields, return users to the relevant component section or table rather than one arbitrary field.

#### Image input procedures

Add an optional image input methods section, or link to an existing shared guide, when administrators need detailed image-entry instructions.

Keep field-specific requirements beside the field. Keep reusable steps in the applicable procedure.

Distinguish between:

- Uploading a file from a computer.
- Selecting an existing Strapi Media Library asset.
- Using a Cloudinary URL to add an asset to the Strapi Media Library.
- Entering a Cloudinary URL directly into a URL field.

An image's source does not determine the field's required input. For example, an image may originate in Cloudinary while the field still requires a Strapi Media Library asset.

If several methods are available, use a concise table to identify the field or situation and link to the correct procedure.

#### Return links

Place return links after the example or procedure.

For field-specific examples, link back to the relevant field row.

For shared procedures, provide a link to the top-level fields table. A second link to Image Input methods may be useful when administrators need to choose another workflow.

Test all links in the rendered documentation.

### Before publishing

Adapt the checklist to the collection.

The checklist should help administrators confirm that the entry is complete, accurate, and approved before publication. It is not a prerequisite for saving unfinished work.

Include relevant checks for:

- Required fields.
- Content accuracy.
- Links and their destinations.
- Images and field-specific image requirements.
- Repeatable-item order.
- Placeholder or test content.
- Required approval.

Remove checks that do not apply and add collection-specific checks where needed.

Distinguish entry approval requirements from optional recommendations. Identify the approval process or contact when administrators need it.

Keep publishing and post-publication website checks out of this checklist. Those actions belong in Publish and check the website.

### Publish and check the website

Provide the verified steps for publishing the entry.

Include:

1. A link to the Before publishing checklist before the publishing action.
2. The action administrators use to publish.
3. What to do if validation warnings appear.
4. How to confirm publication succeeded.
5. When the website is expected to update.
6. What to check on the website afterward.

Explain any differences between publishing a new entry and publishing changes to an existing entry.

Use the interface labels shown to the intended administrator role. Do not assume every administrator has permission to publish.

If approval is required, explain how administrators know approval has been granted and what to do of someone else must publish the entry.

Describe the actual website update process. Do not assume that refreshing the browser is sufficient or that changes appear immediately until testing has confirmed this.

If a refresh is part of the verified procedure, place it after any required update process or waiting period.

Tell administrators what to do if published content does not appear after the expected process has completed.

### Troubleshooting

Organize troubleshooting by problems administrators can recognize.

Use headings such as:

- I saved the entry, but it is not on the website.
- Strapi will not publish the entry.
- The image is not displaying as expected.

For each problem, explain:

- What to check.
- Which safe actions the administrator can take.
- What result to expect.
- Who to contact if the problem remains unresolved.

Use verified causes and solutions. Do not add speculative fixes as though they are confirmed.

Check publication status and the expected website update process before recommending browser-related actions.

Do not direct administrators to change content schemas, permissions, deployment settings, or application code.

When escalation is needed, recommend the administrator reach out in Slack to the appropriate channel and explain what information to provide, such as the collection name, entry name, action attempted, and visible error message.

Do not ask administrators to share passwords, access tokens, or other sensitive information.

### Content ownership and maintenance

Replace the template placeholders with approved roles, teams, or contact routes.

Include:

- Content questions: who confirms wording, facts, and approved assets.
- Technical problems: who handles interface, validation, or website issues.
- Guide owner: who is responsible for keeping the instructions current.
- Last verified: when the relevant instructions were checked.

Use contact information that is appropriate for the documentation's audience and visibility.

Resolve ownership with the project maintainers before completing the guide.

Use Last verified to record when the instructions were checked against relevant interface and workflow. Do not update it just because the wording was edited.

Keep the detailed contributor maintenance process in this authoring guide rather than repeating it in every collection guide.

## Final review and submission

### Review the content

Before requesting review, confirm:

- The guide identifies the correct collection and intended audience.
- Field labels and instructions match the administrator interface.
- Required settings and recommendations are clearly distinguished.
- Saving and publishing behaviour has been identified.
- Component and nested-component instructions are accurate, if applicable.
- Website locations and display behaviour are correct.
- Image input methods match the relevant fields.
- Examples contain no sensitive or unapproved information.
- Optional sections are retained only where useful.
- Placeholders, unresolved questions, and author comments are removed.
- Ownership and verification information is complete.

### Test navigation and rendering

Preview the guide in the working environment and the documentation site's renderer when available.

Check:

- Table readability.
- Heading structure.
- Links to component instructions and visual examples.
- Field-row anchors and return links.
- Relative image paths.
- Expandable examples.
- Line breaks and other formatting.

Use the repository's tested method for anchors. Avoid standalone HTML between Markdown table rows.

Verify active links. Do not leave active links pointing to placeholder destinations.

A link that works in a local editor preview must also be checked in the documentation site when that preview is available.

### Run repository checks

Run the following checks from the repository root before pushing the completed guide for review.

#### Check formatting

```bash
yarn format:check
```

Resolve any formatting issues reported by Prettier.

#### Check Markdown

```bash
yarn lint:md
```

Resolve reported Markdown errors, including invalid links to headings or field anchors.

Do not disable a rule simply to hide an infinished link or placeholder.

#### Check spelling

```bash
yarn check:spelling
```

Review reported spelling issues and correct mistakes.

For legitimate collection names, technical terms, or other entry vocabulary, consider if these fall under an exception. Do not change accurate field labels just to satisfy the spell checker.

#### Build the documentation and check links

```bash
yarn build
yarn check:links
```

Run the build first because the link checker checks the generated files in `dist/`, not the Markdown source files.

Resolve build failures before checking links. Rebuild after changes that affect the generated documentation, then run the link check again.

Review and resolve broken links reported by the check. Also test field-row anchors, return links, and expandable examples manually in the rendered guide.

#### Check accessibility

```bash
yarn check:a11y
```

This script builds the documentation, starts a local server, and runs automated accessibility checks using the generated sitemap.

Review and resolve accessibility failures affecting the guide. If the command cannot run locally, record the problem in the pull request and check the accessibility results when available.

Automated checks do not replace reviewing the guide for clear instructions, useful image descriptions, readable tables, and easy navigation.

### Request review

In the pull request description, identify:

- The collection documented.
- The sections or workflows covered.
- What was verified and in which environment.
- Any remaining questions.
- The related issue.

## Maintenance of the complete guide
