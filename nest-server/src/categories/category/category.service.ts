import { Injectable, NotFoundException } from '@nestjs/common';
import { Category } from './category.interface';
import { database as db } from 'src';
import { firebaseConfig } from 'firebase-functions';
@Injectable()
export class categoryService {
  collection;

  constructor() {}

  async getCollectionRef() {}

  async createCategory(title: string): Promise<number> {
    this.collection = await db.collection('itemCategories');
    let id = await this.collection
      .add({
        title,
      })
      .then(documentReference => {
        return documentReference.id;
      })
      .catch(error => {
        console.log('error::', error);
      });

    return id;
  }

  async getCategories() {
    this.collection = await db.collection('itemCategories');
    let categories = await this.collection
      .get()
      .then(snapshot => {
        let categories = [];
        snapshot.forEach(doc => {
          let obj = doc.data();
          obj.id = doc.id;
          categories.push(obj);
        });

        return categories;
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });

    return categories;
  }

  async getSingleCategory(id: string) {
    this.collection = await db.collection('itemCategories');
    let category;
    try {
      category = await this.collection
        .doc(id)
        .get()
        .then(docRef => {
          return docRef.data();
        })
        .catch(error => {
          console.log('error getting doc::', error);
        });
    } catch (error) {
      throw new NotFoundException('Category not found');
    }
    if (!category) {
      throw new NotFoundException('Category not found');
    }
    return category;
  }

  async updateCategory(categoryId: string, title: string): Promise<boolean> {
    this.collection = await db.collection('itemCategories');
    let status: boolean = false;
    try {
      let documentRef = this.collection.doc(categoryId);
      status = await documentRef
        .update({
          title,
        })
        .then(res => {
          return true;
        });
    } catch (error) {
      console.log('error updating document::', error);
      status = false;
    }
    return status;
  }

  async removeCategory(categoryId: string) {
    this.collection = await db.collection('itemCategories');
    let status: boolean = false;
    try {
      let documentRef = this.collection.doc(categoryId);
      status = await documentRef.delete().then(() => {
        return true;
      });
    } catch (error) {
      console.log('error deleting document::', error);
      status = false;
    }
    return status;
  }
}
