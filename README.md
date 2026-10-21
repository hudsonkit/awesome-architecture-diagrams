# Awesome Architecture Diagrams

A curated list of tools and frameworks for explaining software architecture: systems, services, infrastructure, dependencies, and the interactions between them.

Choose an authoring tool to make diagrams, a model-based tool to keep multiple views connected, or a library to build your own diagramming experience. Rendering services and layout engines are listed separately because they solve different parts of the workflow.

[Browse the searchable directory](https://hudsonkit.github.io/awesome-architecture-diagrams/).

Maintained by [Hudson Kit](https://github.com/hudsonkit). [ARC](https://github.com/arach/arc) is developed by the same maintainer. ARC is included under the same [contribution criteria](CONTRIBUTING.md) as other projects. Entries are alphabetical within each category; placement is not a ranking.

## Contents

- [Diagrams as code](#diagrams-as-code)
- [Architecture models and views](#architecture-models-and-views)
- [Visual editors](#visual-editors)
- [Rendering services](#rendering-services)
- [Diagram UI and layout libraries](#diagram-ui-and-layout-libraries)
- [Learning resources](#learning-resources)
- [Contributing](#contributing)
- [License](#license)

## Diagrams as code

Author diagrams in text or a programming language, then render them for documentation or review.

- [ARC](https://github.com/arach/arc) - Typed TypeScript and JSON architecture diagrams with a React renderer, visual editor, and CLI; a companion viewer provides lossy Mermaid flowchart and state-diagram import.
- [Archify](https://github.com/tt-a1i/archify) - Agent skill that turns descriptions or repository analysis into typed JSON source and self-contained interactive HTML diagrams.
- [C4-PlantUML](https://github.com/plantuml-stdlib/C4-PlantUML) - PlantUML macros for authoring C4 diagrams; requires PlantUML rather than providing a standalone modeling application.
- [D2](https://d2lang.com/) - Declarative diagram language with nested containers, multiple layout engines, and a local CLI.
- [Diagrams](https://diagrams.mingrammer.com/) - Python library for cloud and on-premises architecture diagrams using provider node types and Graphviz rendering.
- [Graphviz](https://graphviz.org/) - Graph visualization tools that lay out and render DOT descriptions of nodes, edges, and clusters.
- [Mermaid](https://mermaid.ai/open-source/intro/) - Text-based diagramming library for flowcharts, sequence diagrams, and other diagram types embedded in documentation.
- [PasteZap Flowchart Maker](https://pastezap.com/tools/flowchart-maker/) - Browser-based Mermaid flowchart authoring with an add-step form, editable source, and SVG/PNG export for documenting system relationships.
- [PlantUML](https://plantuml.com/) - Text-based UML and related diagrams, including component, deployment, and sequence diagrams.

## Architecture models and views

Describe architecture concepts and relationships, or use a defined notation to communicate them across diagrams.

- [Archi](https://www.archimatetool.com/) - Desktop modeling application for ArchiMate enterprise architecture models and views.
- [IcePanel](https://icepanel.io/) - Visual C4 modeling tool that reuses model objects across connected architecture diagrams.
- [Ilograph](https://www.ilograph.com/) - Model-based, interactive system diagrams with automatic layouts and zoomable views of components and flows.
- [LikeC4](https://likec4.dev/) - Architecture DSL that generates interactive views from a shared model and supports embedding diagrams in applications and documentation.
- [Structurizr](https://docs.structurizr.com/) - C4 models as code using Structurizr DSL to create multiple architecture views from one model.

## Visual editors

Draw and arrange diagrams directly. General-purpose editors are included when they support software architecture sketching or documentation.

- [draw.io](https://www.drawio.com/) - Visual diagram editor, also available at app.diagrams.net, with UML, network, and infrastructure shape libraries.
- [Eraser](https://docs.eraser.io/what-is-eraser) - Technical diagramming workspace with a visual canvas, diagram-as-code authoring, and AI-assisted diagram generation.
- [Excalidraw](https://github.com/excalidraw/excalidraw) - Open-source whiteboard with a hand-drawn style for sketching systems and collaborating on early designs.

## Rendering services

Convert existing diagram source into images through an API; the source language still defines the diagram.

- [Kroki](https://kroki.io/) - Unified HTTP rendering API for languages and tools including Graphviz, Mermaid, PlantUML, and D2.

## Diagram UI and layout libraries

Building blocks for custom editors and viewers. These require application development.

- [ELK.js](https://github.com/kieler/elkjs) - JavaScript graph layout algorithms that compute element positions and edge routes. Rendering and interaction are supplied by the consuming application.
- [React Flow](https://reactflow.dev/) - React components for interactive node-and-edge editors and viewers, with customizable nodes and edges; applications supply layout separately.

## Learning resources

Methods and notation for communicating software architecture across levels of detail.

- [C4 model](https://c4model.com/) - A framework for describing software architecture through system context, container, component, and code diagrams.

## Contributing

Corrections and additions are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) for scope, evidence requirements, and entry format.

Descriptions were checked against the linked official documentation or repositories on September 27, 2026. This is a curated directory, not a hands-on benchmark or an exhaustive catalog. Product capabilities can change; consult each project's documentation for current details.

## License

This list and its original descriptions are dedicated to the public domain under [CC0 1.0](LICENSE). Linked projects, trademarks, and documentation retain their own licenses and terms.
