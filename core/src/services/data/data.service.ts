import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Entity } from '../../models';

@Injectable()
export class DataService {
    private collections: Map<Function, any[]> = new Map<Function, any[]>();
    private id = 0;

    get<TEntity extends Entity>(entityType: Type<TEntity>): Observable<TEntity[]> {
        if (!this.collections.has(entityType)) {
            this.collections.set(entityType, []);
        }

        return (<any>Observable).of(this.collections.get(entityType));
    }

    create<TEntity extends Entity>(creating: TEntity, entityType: Type<TEntity>): Observable<TEntity> {
        if (!this.collections.has(entityType)) {
            this.collections.set(entityType, []);
        }
        const collection = this.collections.get(entityType);

        creating.id = ++this.id;
        collection.push(creating);

        return (<any>Observable).of(creating);
    }
}
