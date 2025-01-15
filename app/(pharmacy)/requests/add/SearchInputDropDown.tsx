import React, {
  type ChangeEvent,
  type Dispatch,
  type SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import debounce from 'lodash/debounce';
import { Search, XIcon } from 'lucide-react';

export interface SelectInputProps {
  id?: string
  label?: string
}

interface SearchInputDropDownProps {
  data: SelectInputProps[]
  search: SelectInputProps
  setSearch: Dispatch<SetStateAction<SelectInputProps>>
}

function SearchInputDropDown({
  data,
  search,
  setSearch,
}: SearchInputDropDownProps) {
  const dropDownRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  const debounceSearch = useMemo(
    () => debounce(async (value: SelectInputProps) => {
      setSearch(value);
    }, 500),
    [setSearch],
  );

  useEffect(() => {
    debounceSearch?.(search);
    return () => debounceSearch?.cancel();
  }, [debounceSearch, search]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch?.({ label: value });
    // debounceSearch && debounceSearch(value)
  };

  useEffect(() => {
    const handleMouseClickOutside = (e: MouseEvent) => {
      if (
        dropDownRef.current != null
        && !dropDownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleMouseClickOutside);
    return () => document.removeEventListener('mousedown', handleMouseClickOutside);
  }, []);
  return (
    <div className="relative w-full p-2" ref={dropDownRef}>
      <form action="">
        <label
          htmlFor="searchInput"
          className="text-slate-700 text-[14px] font-semibold "
        >
          {' '}
          Search user

        </label>
        <div
          className="flex flex-row items-center space-x-2 border rounded-lg pl-2 pr-2
          focus-within:ring focus-within:ring-slate-50 mt-1
          "
        >
          <Search
            size={16}
          />
          <input
            id="searchInput"
            placeholder="Identify client..."
            className="border-none outline-none h-8 rounded-lg p-2 text-[12px] flex-1"
            value={search?.label}
            onChange={handleSearch}
            onFocus={() => setIsOpen(true)}
          />
          { search.label && search?.label?.length > 0
          && (
          <XIcon
            size={16}
            onClick={() => {
              setSearch({ id: '', label: '' });
              // data = [];
            }}
          />
          )}
        </div>
        {isOpen && (
          <div className="absolute bg-white shadow-lg left-0 right-4 rounded-lg border max-h-[200px] overflow-y-auto border-slate-200 flex-1 w-full mt-1">
            {data?.length > 0 ? (
              data?.map((item) => (
                <div
                  key={item?.id}
                  className="p-2 hover:bg-slate-50 hover:cursor-pointer text-[12px]"
                  onClick={() => {
                    setIsOpen(false);
                    // setPatientID(item?.id as string)
                    setSearch({ id: item?.id, label: item?.label });
                  }}
                  tabIndex={0}
                  role="button"
                  onKeyDown={() => {
                    setIsOpen(false);
                    // setPatientID(item?.id as string)
                    setSearch({ id: item?.id, label: item?.label });
                  }}
                >
                  {item?.label?.slice(0, 50)}
                </div>
              ))
            ) : (
              <div className="p-2">
                <p>No results</p>
              </div>
            )}
          </div>
        )}
      </form>
    </div>
  );
}

export default SearchInputDropDown;
