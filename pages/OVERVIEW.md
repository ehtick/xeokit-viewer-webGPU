
## Scene Graph

The SDK represents models in a scene graph that include the model's objects, geometries, and materials. This scene graph works on
both the browser and NodeJS platforms and can be used to create models, convert between model formats, and provide content for the
SDK's model viewer.


| Package                                                                  | Modules                                                               | Description                                                                  |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------|------------------------------------------------------------------------------|
| [`@xeokit/scene`](https://www.npmjs.com/package/@xeokit/scene)           | [`@xeokit/scene`](https://xeokit.github.io/sdk/docs/modules/_xeokit_scene.html)                       | Scene graph that contains model representations (geometries, materials etc.) |


[![](https://mermaid.ink/img/pako:eNqNVctu2zAQ_BWBpzZIAhToycc2QC41CsQ58sKQG5stKRp8BDEC_3tXlGgvJSqoL5Rmx7Nv6oNJp4BtmDQihAct9l5Y3ivtQUbt-u7XE--7_MuMbiehh4-CZdyDiLBFGfPla2UwIHwN2YEVKOJe_qCnC3RueMvSxKVW1-fZ3wcXEA5AgT04C9HrCozwHpOHHcQGSqAxud_ZC01lShp9LdHH0eFpaXke9VcNGA61vSRtFAUUhOgdEW6Vawy2ahGt2LxCM4khpW6l2NIZ56-v3qX9oYdAyoV5C1ND7iikjifCEdiM9-v71B_CuDZnJcipXO0421wU-zStiTZLxWj5VLJcMJyUJgVckoUFrA5Bv8HMMIuszMlaXEevrY4oQyAX9LCW4QGks0cc1bCdlTO9fWIstf6R5F9Y3brHikXDu_j_OTkAVXluwRpvE9mYtzysHWffOLu5u8Pz_v6GM7LyFTEjK-xx4v9Ht8EcoSV_WIRCvHRqwapLVfh5iQiXEAuFjGUl-h25s7FpqD2TDSm0crJbZsFboRVe67l3nMUDWOBsg48KXkUykTPen5EqUnS7Uy_ZJvoEtywdFd5H04eAbV6FCYiC0tH57fSpGI7zP49r0Ww?type=png)](https://mermaid.live/edit#pako:eNqNVctu2zAQ_BWBpzZIAhToycc2QC41CsQ58sKQG5stKRp8BDEC_3tXlGgvJSqoL5Rmx7Nv6oNJp4BtmDQihAct9l5Y3ivtQUbt-u7XE--7_MuMbiehh4-CZdyDiLBFGfPla2UwIHwN2YEVKOJe_qCnC3RueMvSxKVW1-fZ3wcXEA5AgT04C9HrCozwHpOHHcQGSqAxud_ZC01lShp9LdHH0eFpaXke9VcNGA61vSRtFAUUhOgdEW6Vawy2ahGt2LxCM4khpW6l2NIZ56-v3qX9oYdAyoV5C1ND7iikjifCEdiM9-v71B_CuDZnJcipXO0421wU-zStiTZLxWj5VLJcMJyUJgVckoUFrA5Bv8HMMIuszMlaXEevrY4oQyAX9LCW4QGks0cc1bCdlTO9fWIstf6R5F9Y3brHikXDu_j_OTkAVXluwRpvE9mYtzysHWffOLu5u8Pz_v6GM7LyFTEjK-xx4v9Ht8EcoSV_WIRCvHRqwapLVfh5iQiXEAuFjGUl-h25s7FpqD2TDSm0crJbZsFboRVe67l3nMUDWOBsg48KXkUykTPen5EqUnS7Uy_ZJvoEtywdFd5H04eAbV6FCYiC0tH57fSpGI7zP49r0Ww)

## Data Graph

The SDK employs a generic entity-relationship data graph to manage model semantics, which includes entities, properties, and
relationships. This data graph is compatible with both the browser and NodeJS and facilitates model generation, format conversion,
and content navigation within the SDK's model viewer.


| Package                                                                  | Modules                                                               | Description                                                                  |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------|------------------------------------------------------------------------------|
| [`@xeokit/data`](https://www.npmjs.com/package/@xeokit/data)             | [`@xeokit/data`](https://xeokit.github.io/sdk/docs/modules/_xeokit_data.html)                        | Entity-relationship graph that contains model semantic data.                 |

[![](https://mermaid.ink/img/pako:eNqNVMFunDAU_BX0Tu1qgxaW9QLnHBOlSm4VFwc7WVeAkTFV6Wr_vcZmu89A0nIBzxvPmzdGPkMpGYccyop23b2g74rWRcOE4qUWsgkenosmsI9lBPdU0_MVcrjiVPNHI1N9-epVOk5VeXp6_WG0ulmtrExxhtWjRudB0m32sFbJlis9vHC_cP2-LB1bd9i2YGixbLLewk3q5sHWHf7MKzpG1p1Eu6x-uyni4msvKoYBxjut5HCDVqZxDrxT8OYJ9NByvF4bZ6aL_CFhLDuJCP4viQAJNLRGTn7SqkdLbHOmhcPEev5kyrKadxfIDOfMh_92GCMMCogK2NzdmXcYbgq4_SaYZoF1ri_-seaS5xDD3kzsnWOjI_hA9hPWwuk61cvVCl7JN2f5eqz_v3WePPKxzOhanMiwhZqrmgpmLiV78AXoEzd_EeTmk_E32le6gKK5GCrttXwZmhJyrXq-hb5lpv10jUH-RqvOoC1tID_DL8hjEoVRdDxEJE73GSHZYQuDgeMwyY7kkGTRMSbp_nDZwm8pjcIuTGOSJGS_yxKSpjvD50xoqR6na3N82Q7fLX-0cfkD0IeHkg?type=png)](https://mermaid.live/edit#pako:eNqNVMFunDAU_BX0Tu1qgxaW9QLnHBOlSm4VFwc7WVeAkTFV6Wr_vcZmu89A0nIBzxvPmzdGPkMpGYccyop23b2g74rWRcOE4qUWsgkenosmsI9lBPdU0_MVcrjiVPNHI1N9-epVOk5VeXp6_WG0ulmtrExxhtWjRudB0m32sFbJlis9vHC_cP2-LB1bd9i2YGixbLLewk3q5sHWHf7MKzpG1p1Eu6x-uyni4msvKoYBxjut5HCDVqZxDrxT8OYJ9NByvF4bZ6aL_CFhLDuJCP4viQAJNLRGTn7SqkdLbHOmhcPEev5kyrKadxfIDOfMh_92GCMMCogK2NzdmXcYbgq4_SaYZoF1ri_-seaS5xDD3kzsnWOjI_hA9hPWwuk61cvVCl7JN2f5eqz_v3WePPKxzOhanMiwhZqrmgpmLiV78AXoEzd_EeTmk_E32le6gKK5GCrttXwZmhJyrXq-hb5lpv10jUH-RqvOoC1tID_DL8hjEoVRdDxEJE73GSHZYQuDgeMwyY7kkGTRMSbp_nDZwm8pjcIuTGOSJGS_yxKSpjvD50xoqR6na3N82Q7fLX-0cfkD0IeHkg)


## Model Viewer

The SDK contains a high-performance Web viewer for displaying our model representations. Through a pluggable renderer strategy,
the viewer can be extended to utilize various browser graphics APIs, including WebGL and WebGPU. Multiple models can be viewed
simultaneously, and the viewer allows for the creation of separate canvases, featuring lights, section planes, annotations,
and other elements, to display multiple views of our models.


| Package                                                                  | Modules                                                               | Description                                          |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------|------------------------------------------------------|
| [`@xeokit/viewer`](https://www.npmjs.com/package/@xeokit/viewer)         | [`@xeokit/viewer`](https://xeokit.github.io/sdk/docs/modules/_xeokit_viewer.html)                     | Browser-based model viewer                           |
| [`@xeokit/cameracontrol`](https://www.npmjs.com/package/@xeokit/cameracontrol)  | [`@xeokit/cameracontrol`](https://xeokit.github.io/sdk/docs/modules/cameracontrol.html)        | Interactive camera control for a viewer                     |
| [`@xeokit/webglrenderer`](https://www.npmjs.com/package/@xeokit/webglrenderer)  | [`@xeokit/webglrenderer`](https://xeokit.github.io/sdk/docs/modules/_xeokit_webglrenderer.html) | WebGL rendering strategy for a viewer       |
| [`@xeokit/treeview`](https://www.npmjs.com/package/@xeokit/treeview)     | [`@xeokit/treeview`](https://xeokit.github.io/sdk/docs/modules/_xeokit_treeview.html)                 | HTML tree view widget for a Viewer                          |
| [`@xeokit/locale`](https://www.npmjs.com/package/@xeokit/locale)     | [`@xeokit/locale`](https://xeokit.github.io/sdk/docs/modules/_xeokit_locale.html)                 | Localization service for a viewer                         |

[![](https://mermaid.ink/img/pako:eNqNVUtv2kAQ_ivWntoKUEyMAQtxIVJ7ADWCPqTKl7U9CZssu-7apnEI_737dGweVX3xeuabb97rA0p5BihCKcVFcUfwo8C7mGVEQFoSzrzlOmZa5_0g8AeEd4iZZx4BLAMBwgiKFBiY414iC3NMBeASlOmHj0YSs2Ob0fGlmO2xNeLJk_TuGPAOBDZnSh63Tl6YAO8pZmBFFNcgOo6XSuI8G9GmZdfVLBW7EnUC1BQuSpJdiPB3hSkp67Uux4n1Vw08Nd-TgiQUXCJUQsCqtjIInaYTvAgZgD2nnHJBXq1hSkme44YnJ-nz-xfGSdKKZaGr6OKAGjxbMs6fzanKLY3gT6ZELfN20RxJzgvPsshxaff1jghdS4dUagfVKXSmYG3HSKNnM5wUpcBpOZ-3MD8h-bzsALWyCU_NnvO2kwNNL06S7vJKqZvGU8Ci03JNpTH_7LnhMt11ZElFaOY-MpBp8Pqc-3widCJmu2Lkx6jfn-v3utmvC8qNWTfzahSfrMI4uarW-VmtOV9lOHUt9UoU2R1X5zOlsY2agr3LNKSTgsXKKcgFFMDKwiPM-_JttWyuhIs-9FpGbuMbSYxuBoP_CKdTy4W9Ys4cuUGO3MVzhmgvhmpjM6Ozt37_ZGwjj-xyCjuV5CXk_fcr0PYKLziTc9UMp75r9Qh11J0y-KYMqIckYodJJq97bR6jcit9xCiSxwwecEVlhySbhOKq5JuapSgqRQU9VOWZHHj7g0DRA6aFlEJGSi5W9heiXj2UY4aiA3pB0TD0B74_HvnhcHI7DcPpqIdqKR4Oguk4HAVTfzwMJ7ejYw-9ci5ZbwaTYRgE4XAajCfBKBhNNd0vrVRxHP8CUYMzSw?type=png)](https://mermaid.live/edit#pako:eNqNVUtv2kAQ_ivWntoKUEyMAQtxIVJ7ADWCPqTKl7U9CZssu-7apnEI_737dGweVX3xeuabb97rA0p5BihCKcVFcUfwo8C7mGVEQFoSzrzlOmZa5_0g8AeEd4iZZx4BLAMBwgiKFBiY414iC3NMBeASlOmHj0YSs2Ob0fGlmO2xNeLJk_TuGPAOBDZnSh63Tl6YAO8pZmBFFNcgOo6XSuI8G9GmZdfVLBW7EnUC1BQuSpJdiPB3hSkp67Uux4n1Vw08Nd-TgiQUXCJUQsCqtjIInaYTvAgZgD2nnHJBXq1hSkme44YnJ-nz-xfGSdKKZaGr6OKAGjxbMs6fzanKLY3gT6ZELfN20RxJzgvPsshxaff1jghdS4dUagfVKXSmYG3HSKNnM5wUpcBpOZ-3MD8h-bzsALWyCU_NnvO2kwNNL06S7vJKqZvGU8Ci03JNpTH_7LnhMt11ZElFaOY-MpBp8Pqc-3widCJmu2Lkx6jfn-v3utmvC8qNWTfzahSfrMI4uarW-VmtOV9lOHUt9UoU2R1X5zOlsY2agr3LNKSTgsXKKcgFFMDKwiPM-_JttWyuhIs-9FpGbuMbSYxuBoP_CKdTy4W9Ys4cuUGO3MVzhmgvhmpjM6Ozt37_ZGwjj-xyCjuV5CXk_fcr0PYKLziTc9UMp75r9Qh11J0y-KYMqIckYodJJq97bR6jcit9xCiSxwwecEVlhySbhOKq5JuapSgqRQU9VOWZHHj7g0DRA6aFlEJGSi5W9heiXj2UY4aiA3pB0TD0B74_HvnhcHI7DcPpqIdqKR4Oguk4HAVTfzwMJ7ejYw-9ci5ZbwaTYRgE4XAajCfBKBhNNd0vrVRxHP8CUYMzSw)

## Model Importers and Exporters

The SDK provides functions for importing and exporting its model representations and semantics as industry-standard
AECO file formats. These functions can be used in NodeJS scripts for file format conversion or in the browser to load
various file formats into the viewer.

| Package                                                              | Modules                                                                               | Description                |
|----------------------------------------------------------------------|---------------------------------------------------------------------------------------|----------------------------|
| [`@xeokit/xkt`](https://www.npmjs.com/package/@xeokit/xkt)           | [`@xeokit/xkt`](https://xeokit.github.io/sdk/docs/modules/_xeokit_xkt.html)           | Import and export XKT files |
| [`@xeokit/gltf`](https://www.npmjs.com/package/@xeokit/gltf)         | [`@xeokit/gltf`](https://xeokit.github.io/sdk/docs/modules/_xeokit_gltf.html)         | Import glTF files |
| [`@xeokit/las`](https://www.npmjs.com/package/@xeokit/las)           | [`@xeokit/las`](https://xeokit.github.io/sdk/docs/modules/_xeokit_las.html)           | Import LAS pointcloud scans |
| [`@xeokit/cityjson`](https://www.npmjs.com/package/@xeokit/cityjson) | [`@xeokit/cityjson`](https://xeokit.github.io/sdk/docs/modules/_xeokit_cityjson.html) | Import CityJSON files      |
| [`@xeokit/webifc`](https://www.npmjs.com/package/@xeokit/webifc)     | [`@xeokit/webifc`](https://xeokit.github.io/sdk/docs/modules/_xeokit_webifc.html)     | Import IFC files           |

## Interoperating with BIM Software

The SDK offers functions for sharing bookmarks of viewer state with other BIM software as industry-standard BCF Viewpoints.
These functions can be used to develop applications that facilitate collaboration on construction projects.

| Package                                                                  | Modules                                                               | Description                                          |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------|------------------------------------------------------|
| [`@xeokit/bcf`](https://www.npmjs.com/package/@xeokit/bcf)               | [`@xeokit/bcf`](https://xeokit.github.io/sdk/docs/modules/_xeokit_bcf.html)                           | Load and save BCF                    |

### Utility Libraries

The SDK's internal and lower-level functionalities are mostly available as utility libraries with complete documentation.

| Package                                                                  | Modules                                                               | Description                                          |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------|------------------------------------------------------|
| [`@xeokit/core`](https://www.npmjs.com/package/@xeokit/core)             | [`@xeokit/core/components`](https://xeokit.github.io/sdk/docs/modules/_xeokit_core_components.html)   | Basic component types used throughout the xeokit SDK |
|                                                                          | [`@xeokit/core/constants`](https://xeokit.github.io/sdk/docs/modules/_xeokit_core_constants.html)     | Constants used throughout the xeokit SDK             |
|                                                                          | [`@xeokit/core/utils`](https://xeokit.github.io/sdk/docs/modules/_xeokit_core_utils.html)             | Core utilities used throughout the xeokit SDK        |
| [`@xeokit/datatypes`](https://www.npmjs.com/package/@xeokit/datatypes)   | [`@xeokit/datatypes/basicTypes`](https://xeokit.github.io/sdk/docs/modules/_xeokit_datatypes_basicTypes.html)  | Basic semantic data type constants  |
|                                                                          | [`@xeokit/datatypes/ifcTypes`](https://xeokit.github.io/sdk/docs/modules/_xeokit_datatypes_ifcTypes.html)      | IFC data type constants  |
| [`@xeokit/math`](https://www.npmjs.com/package/@xeokit/math)             | [`@xeokit/math/math`](https://xeokit.github.io/sdk/docs/modules/_xeokit_math_math.html)               | General math definitions and constants               |
|                                                                          | [`@xeokit/math/boundaries`](https://xeokit.github.io/sdk/docs/modules/_xeokit_math_boundaries.html)   | Boundaries math library                              |
|                                                                          | [`@xeokit/math/compression`](https://xeokit.github.io/sdk/docs/modules/_xeokit_math_compression.html) | Geometry de/compression utilities library            |
|                                                                          | [`@xeokit/math/curves`](https://xeokit.github.io/sdk/docs/modules/_xeokit_math_curves.html)           | Spline curves math library                           |
|                                                                          | [`@xeokit/math/geometry`](https://xeokit.github.io/sdk/docs/modules/_xeokit_math_geometry.html)       | Mesh generation functions                            |
|                                                                          | [`@xeokit/math/matrix`](https://xeokit.github.io/sdk/docs/modules/_xeokit_math_matrix.html)           | Matrix and vector math utilities library             |
|                                                                          | [`@xeokit/math/rtc`](https://xeokit.github.io/sdk/docs/modules/_xeokit_math_rtc.html)                 | Relative-to-center (RTC) coordinates math library    |
| [`@xeokit/webgl`](https://www.npmjs.com/package/@xeokit/webglutils)      | [`@xeokit/webglutils`](https://xeokit.github.io/sdk/docs/modules/_xeokit_webglutils.html)             | WebGL utilities library        |
| [`@xeokit/procgen`](https://www.npmjs.com/package/@xeokit/procgen)       | [`@xeokit/procgen/geometry`](https://xeokit.github.io/sdk/docs/modules/_xeokit_procgen_geometry.html) | Geometry generation functions                     |
| [`@xeokit/ktx2`](https://www.npmjs.com/package/@xeokit/ktx2)             | [`@xeokit/ktx2`](https://xeokit.github.io/sdk/docs/modules/_xeokit_ktx2.html)                         | Compressed texture support              |