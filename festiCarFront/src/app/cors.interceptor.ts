import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class CorsInterceptor implements HttpInterceptor {
  constructor(private loader: LoaderService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
    const modifiedReq = req.clone({
      setHeaders:  {
        this.loaderService.showLoader();
        'Access-Control-Allow-Origin': '*'
      }
    });
    return next.handle(modifiedReq).pipe(
      finalize(() => this.loaderService.hideLoader())
    );
  }
}
