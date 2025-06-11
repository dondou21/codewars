class File {
  constructor(fullName, contents) {
    // Store full name as private
    this._fullName = fullName;
    this._contents = contents;

    // Initialize read positions
    this._lineIndex = 0;
    this._charIndex = 0;

    // Parse filename and extension
    const parts = fullName.split('.');
    this._extension = parts.pop();
    this._filename = parts.join('.');
  }

  // Read-only fullName
  get fullName() {
    return this._fullName;
  }

  // Read-only filename
  get filename() {
    return this._filename;
  }

  // Read-only extension
  get extension() {
    return this._extension;
  }

  // Get contents
  getContents() {
    return this._contents;
  }

  // Write new content on a new line
  write(str) {
    if (this._contents.length === 0) {
      this._contents = str;
    } else {
      this._contents += '\n' + str;
    }
  }

  // Read line by line
  gets() {
    const lines = this._contents.split('\n');
    if (this._lineIndex < lines.length) {
      return lines[this._lineIndex++];
    }
    return undefined;
  }

  // Read character by character
  getc() {
    if (this._charIndex < this._contents.length) {
      return this._contents[this._charIndex++];
    }
    return undefined;
  }
}
