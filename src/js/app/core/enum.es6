/*
	class MyEnum1 extends Enum
	MyEnum1.build(MyEnum1, [
		"Item1"
		"Item2"
	])

	class MyEnum2 extends Enum
	MyEnum2.build(MyEnum2,
		Item1: "foo"
		Item2: "bar"
	)

	This will result in an Enum class where enum items can be accessed via the class:

	MyEnum.Item1
	MyEnum.Item2
	MyEnum.enums()
*/


class Enum {

	constructor(_ordinal, _name, _value) {
		this._ordinal = _ordinal;
		this._name = _name;
		this._value = _value;
	}

	// public methods
	getOrdinal() {
		return this._ordinal;
	}

	getName() {
		return this._name;
	}

	getValue() {
		return this._value;
	}

	// public static methods
	static build(EnumClass, enumDefs) {
		var curEnum, curName, curOrdinal = 0, curValue, normalizedName, _i, _len, _ref;

		if (_.isArray(enumDefs)) {
			this._ENUMS = (function() {
				var _i, _len, _results;
				_results = [];
				for (_i = 0, _len = enumDefs.length; _i < _len; _i++) {
					curName = enumDefs[_i];
					_results.push(new EnumClass(curOrdinal++, curName));
				}
				return _results;
			})();
		} else {
			this._ENUMS = (function() {
				var _results;
				_results = [];
				for (curName in enumDefs) {
					curValue = enumDefs[curName];
					_results.push(new EnumClass(curOrdinal++, curName, curValue));
				}
				return _results;
			})();
		}

		this._size = curOrdinal;

		_ref = this._ENUMS;
		for (_i = 0, _len = _ref.length; _i < _len; _i++) {
			curEnum = _ref[_i];
			EnumClass[curEnum.getName()] = curEnum;
		}

		return EnumClass;
	}

	static enums() {
		this._ENUMS;
	}

	static size() {
		this._size;
	}
}

export default Enum
