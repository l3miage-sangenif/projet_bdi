import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoaderService } from '../services/loader.service'; // Assurez-vous d'importer votre service de loader

@Injectable()
export class CorsInterceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Afficher le loader avant d'envoyer la requête
    this.loaderService.showLoader();

    // Clonez la requête et définissez les en-têtes appropriés
    const modifiedReq = req.clone({
      setHeaders: {
        'Access-Control-Allow-Origin': '*'
      }
    });

    // Passez la requête modifiée à l'intercepteur suivant
    return next.handle(modifiedReq).pipe(
      // Cacher le loader après avoir reçu la réponse
      finalize(() => this.loaderService.hideLoader())
    );
  }
}
