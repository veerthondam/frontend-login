import { HttpInterceptorFn } from "@angular/common/http";

export const customInterceptor: HttpInterceptorFn = (req,next) => {
    const token = localStorage.getItem("lg-tkn");
    const clonedRequest = req.clone({
        setHeaders: {
            Authorization: `${token}`
        }
    });
    return next(clonedRequest);
}