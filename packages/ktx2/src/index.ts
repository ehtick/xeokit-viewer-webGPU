/**
 * <img style="padding:0px; padding-top:20px; padding-bottom:30px; height:140px;" src="media://images/xeokit_ktx_logo.svg"/>
 *
 * ## KTX2 Texture Transcoder
 *
 * * Provides {@link KTX2TextureTranscoder}
 * * Configure a {@link @xeokit/viewer!Viewer} with a {@link @xeokit/webgl!WebGLRenderer} that has a {@link KTX2TextureTranscoder}
 * * Then {@link @xeokit/viewer!ViewerModel.createTexture | ViewerModel.createTexture} can create textures from KTX2-encoded compressed textures
 * * Uses the [Basis Universal GPU Texture Codec](https://github.com/BinomialLLC/basis_universal) to
 * transcode [KTX2](https://github.khronos.org/KTX-Specification/) textures.
 * * Loads the Basis Codec from [CDN](https://cdn.jsdelivr.net/npm/@xeokit/xeokit-viewer/dist/basis/) by default, but can
 * also be configured to load the Codec from local files.
 * * We also bundle the Basis Codec with the xeokit-viewer npm package, and in the [repository](https://github.com/xeokit/xeokit-viewer/tree/master/dist/basis).
 *
 * #### What is KTX2?
 *
 * A [KTX2](https://github.khronos.org/KTX-Specification/) file stores GPU texture data in the Khronos Texture 2.0 (KTX2) container format. It contains image data for
 * a texture asset compressed with Basis Universal (BasisU) supercompression that can be transcoded to different formats
 * depending on the support provided by the target devices. KTX2 provides a lightweight format for distributing texture
 * assets to GPUs. Due to BasisU compression, KTX2 files can store any image format supported by GPUs.
 *
 * ## Installation
 *
 * ````bash
 * npm install @xeokit/ktx2
 * ````
 *
 * ## Usage
 *
 * ### Loading an XKT file containing KTX2 textures into a Viewer
 *
 * Create a {@link @xeokit/viewer!Viewer} with a {@link @xeokit/webgl!WebGLRenderer} configured with a
 * {@link KTX2TextureTranscoder}. Then create a {@link @xeokit/viewer!ViewerModel | ViewerModel} within the Viewer, and use {@link loadXKT} to
 * load an XKT file with KTX2-compressed textures into the ViewerModel. For each KTX2 texture in the file, the
 * KTX2TextureTranscoder will transparently transcode the KTX2 data for us.
 *
 * ````javascript
 * import {Viewer} from "@xeokit/viewer";
 * import {WebGLRenderer} from "@xeokit/webgl";
 * import {KTX2TextureTranscoder} from "@xeokit/ktx2";
 * import {loadXKT} from "@xeokit/xkt";
 *
 * const myViewer = new Viewer({
 *     id: "myViewer",
 *     renderer: new WebGLRenderer({ // Optional
 *          textureTranscoder: new KTX2TextureTranscoder({
 *              transcoderPath: "./../dist/basis/" // Optional, path to BasisU transcoder module
 *          })
 *     })
 * });
 *
 * const view1 = myViewer.createView({
 *     id: "myView",
 *     canvasId: "myCanvas1"
 * });
 *
 * view1.camera.eye = [-3.933, 2.855, 27.018];
 * view1.camera.look = [4.400, 3.724, 8.899];
 * view1.camera.up = [-0.018, 0.999, 0.039];
 *
 * const myViewerModel= myViewer.createModel({
 *     id: "myModel"
 * });
 *
 * fetch("myModelWithTextures.xkt") // <<-- XKT file with KTX2 textures
 *     .then(response => {
 *          if (response.ok) {
 *              loadXKT(response.arrayBuffer(), myViewerModel);
 *              myViewerModel.build();
 *          }
 *     });
 * ````
 *
 * ### Loading KTX2 texture files into a Viewer
 *
 * As in the previous example, create a {@link @xeokit/viewer!Viewer} with a {@link @xeokit/webgl!WebGLRenderer} configured with a
 * {@link KTX2TextureTranscoder}, then create a {@link @xeokit/viewer!ViewerModel | ViewerModel} within the Viewer.
 *
 * This time, we'll build the ViewerModel ourselves, using its builder methods. When we
 * call builder method {@link ViewerModel.createTexture} with a path to a KTX2-compressed texture file, the
 * KTX2TextureTranscoder will transparently transcode that KTX2 data for us.
 *
 * ````javascript
 * import {Viewer} from "@xeokit/viewer";
 * import {WebGLRenderer} from "@xeokit/webgl";
 * import {KTX2TextureTranscoder} from "@xeokit/ktx2";
 * import {loadXKT} from "@xeokit/xkt";
 *
 * const myViewer = new Viewer({
 *     id: "myViewer",
 *     renderer: new WebGLRenderer({ // Optional
 *          textureTranscoder: new KTX2TextureTranscoder({ // Optional
 *              transcoderPath: "./../dist/basis/" // Optional, path to BasisU transcoder module
 *          })
 *     })
 * });
 *
 * const view1 = myViewer.createView({
 *     id: "myView",
 *     canvasId: "myView1"
 * });
 *
 * view1.camera.eye = [-3.933, 2.855, 27.018];
 * view1.camera.look = [4.400, 3.724, 8.899];
 * view1.camera.up = [-0.018, 0.999, 0.039];
 *
 * const viewerModel = myViewer.createModel({
 *      id: "myModel"
 *  });
 *
 * viewerModel.createTexture({
 *      id: "myColorTexture",
 *      src: "sample_uastc_zstd.ktx2" // <<----- KTX2 texture asset
 * });
 *
 * viewerModel.createTexture({
 *      id: "myMetallicRoughnessTexture",
 *      src: "crosshatchAlphaMap.jpg" // <<----- JPEG texture asset
 * });
 *
 * viewerModel.createTextureSet({
 *      id: "myTextureSet",
 *      colorTextureId: "myColorTexture",
 *      metallicRoughnessTextureId: "myMetallicRoughnessTexture"
 *  });
 *
 * viewerModel.createGeometry({
 *     id: "myGeometry",
 *     primitive: TrianglesPrimitive,
 *     positions: [1, 1, 1, ...],
 *     normals: [0, 0, 1, 0, ...],
 *     uv: [1, 0, 0, ...],
 *     indices: [0, 1, 2, ...],
 * });
 *
 * viewerModel.createMesh({
 *      id: "myMesh",
 *      textureSetId: "myTextureSet",
 *      geometryId: "myGeometry"
 *  });
 *
 * viewerModel.createObject({
 *      id: "myObject",
 *      meshIds: ["myMesh"]
 *  });
 *
 * viewerModel.build();
 * ````
 *
 * ### Loading KTX2 texture ArrayBuffers into a Viewer
 *
 * As in the previous two examples, create a {@link @xeokit/viewer!Viewer} that has a {@link @xeokit/webgl!WebGLRenderer} configured with a
 * {@link KTX2TextureTranscoder}, and then create a {@link @xeokit/viewer!ViewerModel | ViewerModel} within the Viewer.
 *
 * Once more, build the ViewerModel using its builder methods. This time, call builder method
 * {@link ViewerModel.createTexture} with an ArrayBuffer containing the contents of a KTX2-compressed texture
 * file. As before, the KTX2TextureTranscoder will transparently transcode that KTX2 data for us.
 *
 * ````javascript
 * import {Viewer} from "@xeokit/viewer";
 * import {WebGLRenderer} from "@xeokit/webgl";
 * import {KTX2TextureTranscoder} from "@xeokit/ktx2";
 * import {loadXKT} from "@xeokit/xkt";
 *
 * const myViewer = new Viewer({
 *     id: "myViewer",
 *     renderer: new WebGLRenderer({ // Optional
 *          textureTranscoder: new KTX2TextureTranscoder({ // Optional
 *              transcoderPath: "./../dist/basis/" // Optional, path to BasisU transcoder module
 *          })
 *     })
 * });
 *
 * const view1 = myViewer.createView({
 *     id: "myView",
 *     canvasId: "myView1"
 * });
 *
 * view1.camera.eye = [-3.933, 2.855, 27.018];
 * view1.camera.look = [4.400, 3.724, 8.899];
 * view1.camera.up = [-0.018, 0.999, 0.039];
 *
 * const viewerModel = myViewer.createModel({
 *      id: "myModel"
 * });
 *
 * fetch("sample_uastc_zstd.ktx2") // // <<----- KTX2 texture asset
 *     .then(response => {
 *          if (response.ok) {
 *
 *              viewerModel.createTexture({
 *                  id: "myColorTexture",
 *                  buffers: [arrayBuffer] // <<----- KTX2 texture asset
 *              });
 *
 *              viewerModel.createTexture({
 *                  id: "myMetallicRoughnessTexture",
 *                  src: "../assets/textures/alpha/crosshatchAlphaMap.jpg" // <<----- JPEG texture asset
 *              });
 *
 *              viewerModel.createTextureSet({
 *                  id: "myTextureSet",
 *                  colorTextureId: "myColorTexture",
 *                  metallicRoughnessTextureId: "myMetallicRoughnessTexture"
 *              });
 *
 *              viewerModel.createGeometry({
 *                  id: "myGeometry",
 *                  primitive: TrianglesPrimitive,
 *                  positions: [1, 1, 1, ...],
 *                  normals: [0, 0, 1, 0, ...],
 *                  uv: [1, 0, 0, ...],
 *                  indices: [0, 1, 2, ...],
 *              });
 *
 *              viewerModel.createMesh({
 *                  id: "myMesh",
 *                  textureSetId: "myTextureSet",
 *                  geometryId: "myGeometry"
 *              });
 *
 *              viewerModel.createObject({
 *                  id: "myObject",
 *                  meshIds: ["myMesh"]
 *              });
 *
 *              viewerModel.build();
 *          }
 *     });
 * ````
 *
 * @module @xeokit/ktx2
 */
export * from "./KTX2TextureTranscoder";