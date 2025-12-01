# Tutorial Error Trace Testing Project

A React + TypeScript project designed to test AI model's **Tutorials & Documentation** capability through tutorial-driven code generation and error diagnosis.

## Purpose

This project tests whether an AI model can:
1. **Follow tutorials** and generate code accordingly
2. **Execute the code** and detect when it doesn't run as described
3. **Generate error traces** with detailed diagnosis

## Testing Methodology

### Flow
1. **Input**: Tutorial document from `TUTORIALS/` directory
2. **Model Action**: Follows tutorial and generates code
3. **Execution**: Code is run (build/dev)
4. **Error Detection**: Errors are identified when code doesn't work
5. **Output**: Complete error trace with diagnosis

### Example Test

**Input**:
```
Follow the tutorial in TUTORIALS/tutorial-1-create-user-form.md
Generate the code according to the tutorial steps.
```

**Model Generates Code** → **Runs Code** → **Detects Errors** → **Outputs Error Trace**

## Project Structure

```
TUTORIALS/
├── tutorial-1-create-user-form.md      # User form component tutorial
├── tutorial-2-fetch-users-list.md     # Users list component tutorial
├── tutorial-3-user-detail-page.md      # User detail page tutorial
├── tutorial-4-api-service-integration.md  # API service tutorial
└── tutorial-5-table-component.md      # Table component tutorial

src/
├── components/        # Working components (reference)
├── pages/            # Working pages (reference)
├── services/         # API services (reference)
├── store/            # State management (reference)
├── types/            # TypeScript types (reference)
└── utils/            # Utilities (reference)
```

## Tutorials

Each tutorial in `TUTORIALS/` contains:
- Step-by-step instructions
- Expected result description
- Intentional ambiguities that lead to common errors

When followed literally, these tutorials produce code with errors that need to be diagnosed.

## Getting Started

```bash
npm install
npm run dev
```

The tutorials are meant to be followed by AI models, not manually. Models should:
1. Read the tutorial
2. Generate code following the steps
3. Execute the code
4. Generate error trace if errors occur

## Technologies

- React 18.2.0
- TypeScript 5.2.2
- Vite 5.0.8
- React Router DOM 6.20.0
- Zustand 4.4.7
- Axios 1.6.2

## License

MIT
