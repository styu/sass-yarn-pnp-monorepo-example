import { LegacyImporter } from "sass";
import pnpapi from "pnpapi";

/**
 *
 * @param dirname The directory from which to resolve the request from
 * @returns
 */
export default function legacyPnpImporter(dirname: string) {
  const importer: LegacyImporter = (url, _prev, done) => {
    const res = pnpapi.resolveRequest(url, dirname);
    if (res == null) {
      done(null);
    } else {
      done({ file: res.toString() });
    }
  };
  return importer;
}
