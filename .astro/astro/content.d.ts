declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
			components: import('astro').MDXInstance<{}>['components'];
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"apps": {
"ai-interview-trainer.mdx": {
	id: "ai-interview-trainer.mdx";
  slug: "ai-interview-trainer";
  body: string;
  collection: "apps";
  data: InferEntrySchema<"apps">
} & { render(): Render[".mdx"] };
"ai-researcher.mdx": {
	id: "ai-researcher.mdx";
  slug: "ai-researcher";
  body: string;
  collection: "apps";
  data: InferEntrySchema<"apps">
} & { render(): Render[".mdx"] };
"ai-resume-builder.mdx": {
	id: "ai-resume-builder.mdx";
  slug: "ai-resume-builder";
  body: string;
  collection: "apps";
  data: InferEntrySchema<"apps">
} & { render(): Render[".mdx"] };
"baby-journal.mdx": {
	id: "baby-journal.mdx";
  slug: "baby-journal";
  body: string;
  collection: "apps";
  data: InferEntrySchema<"apps">
} & { render(): Render[".mdx"] };
"expense-tracker.mdx": {
	id: "expense-tracker.mdx";
  slug: "expense-tracker";
  body: string;
  collection: "apps";
  data: InferEntrySchema<"apps">
} & { render(): Render[".mdx"] };
"homework-helper.mdx": {
	id: "homework-helper.mdx";
  slug: "homework-helper";
  body: string;
  collection: "apps";
  data: InferEntrySchema<"apps">
} & { render(): Render[".mdx"] };
"learning-guide.mdx": {
	id: "learning-guide.mdx";
  slug: "learning-guide";
  body: string;
  collection: "apps";
  data: InferEntrySchema<"apps">
} & { render(): Render[".mdx"] };
"pdf-utility.mdx": {
	id: "pdf-utility.mdx";
  slug: "pdf-utility";
  body: string;
  collection: "apps";
  data: InferEntrySchema<"apps">
} & { render(): Render[".mdx"] };
"pregnancy-tracker.mdx": {
	id: "pregnancy-tracker.mdx";
  slug: "pregnancy-tracker";
  body: string;
  collection: "apps";
  data: InferEntrySchema<"apps">
} & { render(): Render[".mdx"] };
"study-assistant.mdx": {
	id: "study-assistant.mdx";
  slug: "study-assistant";
  body: string;
  collection: "apps";
  data: InferEntrySchema<"apps">
} & { render(): Render[".mdx"] };
};
"bundles": {
"career-collection.mdx": {
	id: "career-collection.mdx";
  slug: "career-collection";
  body: string;
  collection: "bundles";
  data: InferEntrySchema<"bundles">
} & { render(): Render[".mdx"] };
"family-collection.mdx": {
	id: "family-collection.mdx";
  slug: "family-collection";
  body: string;
  collection: "bundles";
  data: InferEntrySchema<"bundles">
} & { render(): Render[".mdx"] };
"finance-collection.mdx": {
	id: "finance-collection.mdx";
  slug: "finance-collection";
  body: string;
  collection: "bundles";
  data: InferEntrySchema<"bundles">
} & { render(): Render[".mdx"] };
"individual-collection.mdx": {
	id: "individual-collection.mdx";
  slug: "individual-collection";
  body: string;
  collection: "bundles";
  data: InferEntrySchema<"bundles">
} & { render(): Render[".mdx"] };
"student-collection.mdx": {
	id: "student-collection.mdx";
  slug: "student-collection";
  body: string;
  collection: "bundles";
  data: InferEntrySchema<"bundles">
} & { render(): Render[".mdx"] };
"utilities-collection.mdx": {
	id: "utilities-collection.mdx";
  slug: "utilities-collection";
  body: string;
  collection: "bundles";
  data: InferEntrySchema<"bundles">
} & { render(): Render[".mdx"] };
};
"categories": {
"families.mdx": {
	id: "families.mdx";
  slug: "families";
  body: string;
  collection: "categories";
  data: InferEntrySchema<"categories">
} & { render(): Render[".mdx"] };
"graduates.mdx": {
	id: "graduates.mdx";
  slug: "graduates";
  body: string;
  collection: "categories";
  data: InferEntrySchema<"categories">
} & { render(): Render[".mdx"] };
"individuals.mdx": {
	id: "individuals.mdx";
  slug: "individuals";
  body: string;
  collection: "categories";
  data: InferEntrySchema<"categories">
} & { render(): Render[".mdx"] };
"kids.mdx": {
	id: "kids.mdx";
  slug: "kids";
  body: string;
  collection: "categories";
  data: InferEntrySchema<"categories">
} & { render(): Render[".mdx"] };
"professionals.mdx": {
	id: "professionals.mdx";
  slug: "professionals";
  body: string;
  collection: "categories";
  data: InferEntrySchema<"categories">
} & { render(): Render[".mdx"] };
"students.mdx": {
	id: "students.mdx";
  slug: "students";
  body: string;
  collection: "categories";
  data: InferEntrySchema<"categories">
} & { render(): Render[".mdx"] };
};
"labs": {
"ai-automation.mdx": {
	id: "ai-automation.mdx";
  slug: "ai-automation";
  body: string;
  collection: "labs";
  data: InferEntrySchema<"labs">
} & { render(): Render[".mdx"] };
"document-intelligence.mdx": {
	id: "document-intelligence.mdx";
  slug: "document-intelligence";
  body: string;
  collection: "labs";
  data: InferEntrySchema<"labs">
} & { render(): Render[".mdx"] };
"future-technologies.mdx": {
	id: "future-technologies.mdx";
  slug: "future-technologies";
  body: string;
  collection: "labs";
  data: InferEntrySchema<"labs">
} & { render(): Render[".mdx"] };
"intelligent-utilities.mdx": {
	id: "intelligent-utilities.mdx";
  slug: "intelligent-utilities";
  body: string;
  collection: "labs";
  data: InferEntrySchema<"labs">
} & { render(): Render[".mdx"] };
"mobile-innovation.mdx": {
	id: "mobile-innovation.mdx";
  slug: "mobile-innovation";
  body: string;
  collection: "labs";
  data: InferEntrySchema<"labs">
} & { render(): Render[".mdx"] };
"privacy.mdx": {
	id: "privacy.mdx";
  slug: "privacy";
  body: string;
  collection: "labs";
  data: InferEntrySchema<"labs">
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../../src/content/config.js");
}
