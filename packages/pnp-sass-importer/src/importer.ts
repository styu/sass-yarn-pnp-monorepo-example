import { PosixFS } from "@yarnpkg/fslib";
import libzip, { ZipOpenFS } from "@yarnpkg/libzip";
import { Importer } from "sass";
import pnpapi from "pnpapi";

/**
 *
 * @param dirname The directory from which to resolve the request from
 * @returns
 */
export default function pnpImporter(dirname: string) {
  const importer: Importer = {
    canonicalize: (url, _context) => {
      // We want to use the url as-is
      return new URL(url);
    },
    load: (url: URL) => {
      const zipOpenFs = new ZipOpenFS({ libzip: libzip.getLibzipSync() });
      const crossFs = new PosixFS(zipOpenFs);
      const res = pnpapi.resolveRequest(url.toString(), dirname);
      if (res == null) {
        return null;
      }
      const file = crossFs.readFileSync(res);
      const syntax = res.endsWith(".css") ? "css" : "scss";
      return { contents: file.toString(), syntax };
    },
  };
  return importer;
}
