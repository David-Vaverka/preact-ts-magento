// todo use codegen:generate

export interface GQLCategoryItemChildren {
  id: string;
  name: string;
}

export interface GQLCategoryItem {
  id: string;
  name: string;
  children: GQLCategoryItemChildren[];
}

export interface GQLCategory {
  items: GQLCategoryItem[];
}
