import gulp from "gulp";
import config from "../config";
import panini from "panini";

export const htmlBuild = () => {
    panini.refresh();
    return gulp
        .src(`${config.src.root}/*.html`)
        .pipe(panini({
            root: config.src.root,
            layouts: `${config.src.html}/layouts`,
            partials: `${config.src.html}/partials`,
        }))
        .pipe(gulp.dest(config.build.html));
}


export const htmlWatch = () => gulp.watch(config.watch.html, htmlBuild);
