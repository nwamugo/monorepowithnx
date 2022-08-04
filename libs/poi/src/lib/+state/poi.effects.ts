/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { PoiService } from '../poi.service';

import * as PoiActions from './poi.actions';
import { EMPTY, map } from 'rxjs';

@Injectable()
export class PoiEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PoiActions.initPoi),
      fetch({
        run: (action) => {
          return this.poiService.getAll().pipe(
            map(pois => PoiActions.loadPoiSuccess({ poi: pois }))
          )
        },
        onError: (action, error) => {
          console.error('Error', error);
          return PoiActions.loadPoiFailure({ error });
        },
      })
    )
  );

  visit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PoiActions.visitPoi),
      fetch({
        run: action => {
          const stat = localStorage.getItem('tour-' + action.poiId);
          const total = stat ? Number(stat) + 1 : 1;
          localStorage.setItem('tour-' + action.poiId, total.toString());
          return EMPTY;
        }
      }
    )
  ));

  constructor(
    private readonly actions$: Actions,
    private poiService: PoiService
  ) {}
}
