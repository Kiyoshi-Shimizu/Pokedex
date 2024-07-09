import { NgModule } from "@angular/core";
import { RegionComponent } from "./region.component";
import { CommonModule } from "@angular/common";
import { regionRoutes } from "./region.routes";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [RegionComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(regionRoutes)
    ],
    bootstrap: [RegionComponent]
})
export class regionModule {}
